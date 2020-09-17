export const HOST = 'http://localhost:9000';

export const URL_GET_WORKSHOP_NAMES = "/api/v1/workshops/head";
export const URL_GET_WORKSHOP_DATA = "/api/v1/workshop/"; // + workshop.name
export const URL_POST_WORKSHOP = "/api/v1/admin/workshop";

export const URL_GET_TUTORIAL_NAMES = '/api/v1/tutorials/head';
export const URL_GET_TUTORIAL_DATA = '/api/v1/tutorial/'; // + tutorial.name
export const URL_POST_TUTORIAL = '/api/v1/admin/tutorial';
export const URL_GET_CATEGORY_NAMES = '/api/v1/tutorials/categories/head';

export const URL_GET_MATERIAL_NAMES = '/api/v1/materials/head';
export const URL_GET_MATERIAL_DATA = '/api/v1/material/'; // + material.name
export const URL_POST_MATERIAL = '/api/v1/admin/material';

export const URL_GET_PRESET_NAMES = '/api/v1/presets/head';
export const URL_GET_PRESET_DATA = '/api/v1/preset/'; // + preset.name
export const URL_POST_PRESET = '/api/v1/admin/preset';

export const URL_GET_COUPONS = '/api/v1/admin/coupons';
export const URL_POST_COUPON = '/api/v1/admin/coupons';
export const URL_DELETE_COUPON = '/api/v1/admin/coupon/'; // + coupon._id

export const URL_GET_CHALLENGE_NAMES = '/api/v1/challenges/head';
export const URL_GET_CHALLENGE_DATA = '/api/v1/challenge/'; // + challenge.name
export const URL_POST_CHALLENGE = '/api/v1/admin/challenge/';

export const URL_GET_COURSES_NAMES = '/api/v1/courses/head';
export const URL_GET_COURSE_DATA = '/api/v1/course/'; // + course.name
export const URL_POST_COURSE = '/api/v1/admin/course';

export const URL_GET_ALL_COURSE_VIDEOS = '/api/v1/course/videos';
export const URL_POST_COURSE_VIDEO = '/api/v1/admin/course/video';
export const URL_DELETE_COURSE_VIDEO = '/api/v1/admin/course/video/'; // + video._id

export const URL_GET_ALL_COURSE_FILES = '/api/v1/course/files';
export const URL_POST_COURSE_FILE = '/api/v1/admin/course/file';
export const URL_DELETE_COURSE_FILE = '/api/v1/admin/course/file/'; // + file._id

export const URL_REGISTER = '/api/v1/auth/register';
export const URL_LOGIN = '/api/v1/auth/login';
export const URL_AUTH_GOOGLE = '/api/v1/auth/google';
export const URL_UPDATE_USER_INFO = '/api/v1/auth/update';
export const URL_GET_USER_INFO = '/api/v1/auth/user';
export const URL_PASSWORD_RESET = '/api/v1/auth/reset';
export const URL_POST_PASSWORD = '/api/v1/auth/reset/new';
export const URL_POST_USER_INFO = '/api/v1/auth/update';
export const URL_CONFIRM_USER = '/api/v1/auth/confirm/'; // + confirmation link
export const GOOGLE_CLIENT = '329027502191-i98e1odi91fraohjilbc3ist7uu8tjoj.apps.googleusercontent.com';
export const URL_LOGIN_GOOGLE = '/api/v1/auth/google';

export const STRIPE_PK = 'pk_test_5LIx4WHIYVoVZnnenECqIjt500K30frsZH';
export const STRIPE_PRICE_SUBSCRIPTION_2 = 'price_1HM4yaG6Hl2ceMlVRNe3z62p';
export const URL_SUBSCRIBE = '/api/v1/payments/subscribe';

export const URL_UPDATE_USER_PROFILE = '/api/v1/auth/update';
export const URL_UPDATE_PAYMENT_METHOD = '/api/v1/auth/update/payment-method';

export const URL_GET_MY_WORKSHOPS = '/api/v1/workshops';
export const URL_GET_MY_MATERIALS = '/api/v1/materials';
export const URL_GET_MY_PRESETS = '/api/v1/presets';
export const URL_GET_MY_FILE = HOST + '/api/v1/download/'; // + file._id