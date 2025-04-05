// global error handling middleware

const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);

    if (err.name == "CastError") {
      const message = "Resource not found";
      error = new Error(message);
      error.StatusCode = 404;
    }

    if (err.code == 11000) {
      const message = "Duplicate field value entered";
      error = new Error(message);
      error.StatusCode = 400;
    }

    if (err.name == "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(", "));
      error.StatusCode = 400;
    }

    res
      .status(error.StatusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
