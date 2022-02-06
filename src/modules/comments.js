import { getComments } from './APIcomments';

const displayComments = async (userID) => {
  const comments = await getComments(userID);

  if (comments.length === undefined) {
    const commentCounter = document.querySelector('.comment-counter');
    commentCounter.innerHTML = '(0)';
  } else {
    comments.forEach((comment) => {
      const commentContainer = document.querySelector('.comment-container');

      const li = document.createElement('li');
      li.classList.add('single-comment');
      const time = document.createElement('span');
      time.classList.add('comment-time');
      time.innerText = `${comment.creation_date}, `;

      const author = document.createElement('span');
      author.classList.add('comment-author');
      author.innerText = `${comment.username}: `;

      const message = document.createElement('span');
      message.classList.add('commentMsg');
      message.innerText = comment.comment;

      li.append(time, author, message);
      commentContainer.appendChild(li);
    });
  }
};

export { displayComments as default };
