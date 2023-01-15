import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const CyberProductSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    threeValue: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    colors: {
      type: Array,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);
const cyberProductModel = mongoose.model("cyberProduct", CyberProductSchema);
export default cyberProductModel;
