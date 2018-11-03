module.exports = {
  PORT: 4000,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: 'https://xamber.herokuapp.com',

  /* Neo4j database credential details */
  DB_URI: 'bolt://hobby-fhllgoangmiagbkemgefddbl.dbs.graphenedb.com:24786',
  DB_USERNAME: 'app114160613-gR4vul',
  DB_PASSWORD: 'b.zYGRJPkOfLzh.qka7E6CEzDHw7gGx',

  /* The daily limit for each user */
  USER_LIMIT_PER_DAY: 50,

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: 'securekey',

  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: '6Lf8lngUAAAAAIIbmAqskoWeB3f7lk4OgrH0dkaE',

  /* 
    Google Cloud API to prevent from users from submitting malware URLs.
    Get it from https://developers.google.com/safe-browsing/v4/get-started
  */
  GOOGLE_SAFE_BROWSING_KEY: '',

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: '',
  MAIL_PORT: 587,
  MAIL_SECURE: false,
  MAIL_USER: '',
  MAIL_PASSWORD: '',

};
