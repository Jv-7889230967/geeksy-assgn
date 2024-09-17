export const validationRules = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid email address',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters long',
      },
    },
    name: {
      required: 'Name is required',
    },
    phoneNumber: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Phone number must be 10 digits',
      },
    },
    profession: {
      required: 'Profession is required',
    },
  };