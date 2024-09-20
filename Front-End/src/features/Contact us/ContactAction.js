// src/redux/contactActions.js
import axios from "axios";

export const submitContactFormStart = () => ({
  type: "contact/submitFormStart",
});

export const submitContactFormSuccess = (formData) => ({
  type: "contact/submitFormSuccess",
  payload: formData,
});

export const submitContactFormFailure = (error) => ({
  type: "contact/submitFormFailure",
  payload: error,
});

export const resetContactForm = () => ({
  type: "contact/resetForm",
});

// Thunk action creator
export const submitContactForm = (formData) => async (dispatch) => {
  dispatch(submitContactFormStart());
  try {
    // Simulating API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Replace this with your actual API call
    // const response = await axios.post('/api/contact', formData);
    // if (response.status !== 200) throw new Error('Failed to submit form');

    dispatch(submitContactFormSuccess(formData));
  } catch (error) {
    dispatch(submitContactFormFailure(error.message));
  }
};
