const frisby = require('frisby');

const url = 'https://jsonplaceholder.typicode.com';

module.exports = {

  /**
   *
   * @param endPoint
   * @returns {*}
   */
  deleteTest: (endPoint) => frisby.get(url + endPoint),

  /**
   *
   * @param endPoint
   * @returns {*}
   */
  getTest: (endPoint) => frisby.get(url + endPoint),

  /**
   *
   * @param endPoint
   * @param title
   * @param body
   * @param userID
   * @returns {*}
   */
  postTest: (endPoint, title, body, userID) => frisby.post(url + endPoint, {
    data: {
      title,
      body,
      userId: userID,
    },
  }),

  /**
   * putTest() - executing a POST http method
   * @param endPoint
   * @param title
   * @param body
   * @param userID
   * @returns {*}
   */
  putTest: (endPoint, id, title, body, userID) => frisby.put(url + endPoint, {
    data: {
      id: userID,
      title,
      body,
      userId: userID,
    },
  }),

};
