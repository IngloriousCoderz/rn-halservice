let res1 = null;

$.get(url1)
  .then((response1) => {
    res1 = response1;
    $.get(url2);
  })
  .then((response2) => $.get(url3))
  .then((response3) => {
    console.log(res1);
  })
  .catch((error) => {})
  .finally(() => {});

async function fetchStuffInSeries() {
  try {
    const response1 = await $.get(url1);
    const response2 = await $.get(url2);
    const response3 = await $.get(url3);
    return response3;
  } catch (error) {
  } finally {
  }
}

async function fetchStuffInParallel() {
  const [response1, response2] = await Promise.all([$.get(url1), $.get(url2)]);
}

async function printResponse3() {
  const response3 = await fetchStuffInSeries();
  console.log(response3);
}
printResponse3();

fetchStuffInSeries().then(console.log);
