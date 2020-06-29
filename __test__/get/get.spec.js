const frisby = require('frisby');
const utils = require('../../utils/utilRequest');

const getEndPoint = '/posts';

describe('Get Resources', () => {
  it('Retrieve existing comments', async () => {
    const expectID = 2;
    await utils.getTest(`${getEndPoint}/${expectID}/comments`)
        .expect('header', 'Content-Type', /json/)
        .expect('status', 200)
        .expect('json', '*.postId', expectID)
        .expect('bodyContains', 'Presley.Mueller@myrl.com');
        // .expect('bodyContains', )
  });
});
