const getBookId = async () => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // name: 'First Game',
    }),
  });

  await resp.json();
};

export default getBookId;
