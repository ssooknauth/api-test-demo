const faker = require('faker');
const frisby = require('frisby');
const utils = require('../../utils/utilRequest');

const postEndPoint = '/posts';

frisby.globalSetup({
    request: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
});

describe('/Delete tests', () => {
    it('verify successful Deletion of a new user', async () => {
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
                 utils.getTest(`${postEndPoint}/${ids}/comments`)
                    .expect('status', 200)
                    .expect('json', '*.postId', ids)
                    .expect('bodyContains', 'Jayne_Kuhic@sydney.com');

                 return utils.deleteTest(`${postEndPoint}/${ids}`)
                     .expect('status', 200);

                /*
                  Then a follow up GET to confirm it was actually deleted
                  utils.getTest(`${postEndPoint}/${postId}/comments`)
                   .expect('status', 404)
                 */
            });
    });
});
