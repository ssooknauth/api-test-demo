const faker = require('faker');
const frisby = require('frisby');
const utils = require('../../utils/utilRequest');

const { Joi } = frisby;
const postEndPoint = '/posts';

frisby.globalSetup({
    request: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
});

describe('/Post tests', () => {
    it('verify schema', async () => {
        const title = faker.name.title();
        const body = faker.lorem.word();
        const userID = faker.random.uuid();

        await utils.postTest(postEndPoint, title, body, userID)
            .expect('status', 201)
            .expect('jsonTypes', 'data.title', Joi.string())
            .expect('jsonTypes', 'data.body', Joi.string())
            .expect('jsonTypes', 'data.userId', Joi.string())
            .expect('jsonTypes', 'id', Joi.number());
    });

  it('verify successful creation of a new user & retrieve the new user', async () => {
      const title = faker.name.title();
      const body = faker.lorem.word();
      const userID = faker.random.uuid();

        await utils.postTest(postEndPoint, title, body, userID)
          .expect('status', 201)
            .expect('json', 'data.title', title)
            .expect('json', 'data.body', body)
            .expect('json', 'data.userId', userID)
      .then((res) => {
                const data = JSON.parse(res.body);
                const postId = data.id;
                const ids = 1;
                /*
                For Testing demo
                return utils.getTest(`{postEndPoint}/${postId}/comments`)
                .expect('status', 200);
                Given these resources are not actually created but mocked( https://jsonplaceholder.typicode.com/guide.html) -
                So requesting against return utils.getTest{postEndPoint}/${postId}/comments
                And asserting within the response body from the previous request postId
                expect('json', '*.postId', postId)
                 */
                return utils.getTest(`${postEndPoint}/${ids}/comments`)
               .expect('status', 200)
               .expect('json', '*.postId', ids)
               .expect('bodyContains', 'Jayne_Kuhic@sydney.com');
      });
  });
});
