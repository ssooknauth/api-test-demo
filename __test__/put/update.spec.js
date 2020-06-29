const faker = require('faker');
const frisby = require('frisby');

const utils = require('../../utils/utilRequest');

const postEndPoint = '/posts';
const putEndPointMocked = '/posts/1';
const putEp = '/posts/';

frisby.globalSetup({
    request: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    },
});

describe('/PUT tests', () => {
    it('verify successful update', async () => {
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
                Given these resources are not actually created but mocked( https://jsonplaceholder.typicode.com/guide.html) -
                So requesting against return utils.getTest{postEndPoint}/${postId}/comments
                And asserting within the response body from the previous request postId
                expect('json', '*.postId', postId)
                 */
                   utils.getTest(`${postEndPoint}/${ids}/comments`)
                    .expect('status', 200)
                    .expect('json', '*.postId', ids)
                    .expect('bodyContains', 'Jayne_Kuhic@sydney.com');

                const titleUpdate = `Update${faker.name.title()}`;
                const bodyUpdate = `Update${faker.lorem.word()}`;
                const id = 1;

                /*
                For Testing demo
                Given these resources are not actually created but mocked( https://jsonplaceholder.typicode.com/guide.html)
                await utils.putTest(postEndPoint + '/' + postId , id, titleUpdate, bodyUpdate, userID)
                With these assertions
                .expect('json', 'data.title', titleUpdate)
                .expect('json', 'data.body', bodyUpdate)
                .expect('json', 'data.userId', userID)
                .expect('json', 'data.id', userID)
                */
                return utils.putTest(putEndPointMocked, id, titleUpdate, bodyUpdate, userID)
                    .expect('status', 200)
                    .expect('json', 'data.title', titleUpdate)
                    .expect('json', 'data.body', bodyUpdate);
            });
    });
});
