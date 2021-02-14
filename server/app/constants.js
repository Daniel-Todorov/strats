const constants = {
    app: {
        allowedOrigins: ['localhost'],
        allowedMethods: ['GET', 'POST','PUT', 'DELETE', 'OPTIONS'],
        staticContentRoute: '/',
        staticContentDir: '../public',
        apiRoute: '/api',
        uniquePropertyName: 'vassalage',
        hashingAlgorithm: 'md5',
        hashingDigest: 'hex',
        emailRegEx: new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
    },
    database: {
        connectionString: 'mongodb://vassalage:GBAzvfG72CuUy78@ds123624.mlab.com:23624/vassalage'
    },
    authorization: {
        algorithm: 'aes-256-cbc',
        salt: '.!3,Z!fLUT2D**zMJU+8B4s(G-he%{g]',
        encryptionEncoding: 'hex',
        decryptionEncoding: 'utf-8'
    }
};

module.exports = constants;
