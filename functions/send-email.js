const SparkPost = require('sparkpost');
const client = new SparkPost('process.env.SPARKPOST');

// If you have a SparkPost EU account you will need to pass a different `origin` via the options parameter:
// const euClient = new SparkPost('<YOUR API KEY>', { origin: 'https://api.eu.sparkpost.com:443' });

client.transmissions.send({
    options: {
      sandbox: true
    },
    content: {
      from: 'testing@sparkpostbox.com',
      subject: 'Hello, World!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'czimbilimbi@gmail.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });
// const SparkPost = require('sparkpost');
// const client = new SparkPost(process.env.SPARKPOST);

// exports.handler = function(event, context, callback) {
//     console.log(event);
//   client.transmissions
//     .send({
//       content: {
//         from: 'czimbilimbi@gmail.com',
//         subject: 'Hello, World!',
//         html:
//           "<html><body><p>My cool email.</p></body></html>"
//       },
//     recipients: [{ address: 'czimbalmos.oliver2001@gmail.com' }]
//   })
//   .then(data =>{
//       callback(null,{
//           statusCode: 200,
//           body: 'so far so good.'
//       })
//   });
// }