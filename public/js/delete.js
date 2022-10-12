const deletePostHandler = async function (event) {
  event.preventDefault();
  const postId = document.getElementById('hiddenID').innerHTML;

  fetch('/api/post/' + postId, {
    method: 'delete',
  })
    .then(function () {
      alert('Post deleted successfully!');
      document.location.reload();
    })
    .catch((err) => console.log(err));
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', deletePostHandler);
