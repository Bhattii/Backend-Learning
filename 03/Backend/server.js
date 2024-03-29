import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

// get a list of 5 jokes
app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'a joke',
      content: 'This is a joke',
    },
    {
      id: 2,
      title: 'another joke',
      content: 'This is another joke',
    },
    {
      id: 3,
      title: 'third joke',
      content: 'This is a third joke',
    },
    {
      id: 4,
      title: '4th joke',
      content: 'This is a fourth joke',
    },
    {
      id: 5,
      title: '5th joke',
      content: 'This is a 5th joke',
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at localhost:${port}`);
});
