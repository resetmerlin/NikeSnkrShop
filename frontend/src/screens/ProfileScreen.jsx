import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userDetailsAction,
  updateProfileAction,
} from "../actions/cyberProfileAction";
import { useNavigate } from "react-router-dom";
import { shippingAddressAction } from "../actions/cyberCartAction";
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInformation = useSelector((state) => state.userLogin);
  const { userInfo } = userInformation;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const myOrder = useSelector((state) => state.myOrder);
  const { loading: orderLoading, error: orderError, orders } = myOrder;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const cart = useSelector((state) => state.cyberCart);
  const { shippingAddress } = cart;

  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [name, setName] = useState(userInfo.name);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [address, setAddress] = useState(shippingAddress.address);

  const [specificAddress, setSpecificAddress] = useState(
    shippingAddress.specificAddress
  );
  const [referenceItem, setReferenceItem] = useState(
    shippingAddress.referenceItem
  );
  useEffect(() => {
    if (userInfo) {
      if (!user.name) {
        dispatch(userDetailsAction("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo]);

  const changeProfileHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password won't match");
    } else {
      dispatch(updateProfileAction({ id: user._id, name, email, password }));

      if (success) {
        navigate("/");
      }
    }
  };

  const addressHandle = (e) => {
    e.preventDefault();
    clientAddressCall();
  };

  function clientAddressCall() {
    new daum.Postcode({
      oncomplete: function (data) {
        var addr = "";
        var extraAddr = "";

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
          setReferenceItem(extraAddr);
        } else {
          setReferenceItem("");
        }

        setPostalCode(data.zonecode);
        setAddress(addr);
        document.getElementById("sample6_detailAddress").focus();
      },
    }).open();
  }
  const addressSaveHandler = (e) => {
    e.preventDefault();
    dispatch(
      shippingAddressAction({
        postalCode,
        address,
        specificAddress,
        referenceItem,
      })
    );
  };

  return (
    <div className="profileScreen__wrap">
      <span className="profileScreen__title">Profile</span>

      <div className="profileScreen__wrap__left">
        <span className="profileScreen__side-title">User Info:</span>
        <form onSubmit={changeProfileHandler}>
          <div className="profileScreen__form">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="profileScreen__form">
            <label htmlFor="userName">Enter name</label>
            <input
              type="text"
              name="userName"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="profileScreen__form">
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="profileScreen__form">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="profileScreen__button">
            Update
          </button>
        </form>
      </div>

      <div className="profileScreen__wrap__right">
        <span className="profileScreen__side-title">User address:</span>
        <form onSubmit={addressSaveHandler}>
          <button
            onClick={addressHandle}
            className="profileScreen__button--find"
          >
            Find address
          </button>
          <div className="profileScreen__form">
            <label htmlFor="PostalCode">Postal code</label>

            <input
              type="text"
              name="PostalCode"
              placeholder="우편번호"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div className="profileScreen__form">
            <label htmlFor="address">address</label>

            <input
              type="text"
              name="address"
              placeholder="주소"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="profileScreen__form">
            <label htmlFor="specificAddress">Specific Aaddress</label>

            <input
              type="text"
              id="sample6_detailAddress"
              name="specificAddress"
              placeholder="상세주소"
              required
              value={specificAddress}
              onChange={(e) => setSpecificAddress(e.target.value)}
            />
          </div>
          <div className="profileScreen__form">
            <label htmlFor="reference">Reference item</label>

            <input
              type="text"
              name="reference"
              placeholder="참고항목"
              value={referenceItem}
              onChange={(e) => setReferenceItem(e.target.value)}
              required
            />
          </div>
          <button className="profileScreen__button" type="submit">
            Update Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileScreen;
