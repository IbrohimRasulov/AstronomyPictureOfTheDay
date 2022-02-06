import getPictures from './GetRequest';
import displayComments from './comments';
import { addComments } from './APIcomments';
import countComments from './countComments';

const showCommentCard = async (title) => {
  const myPicturesJson = await getPictures();
  const stringifiedJson = JSON.stringify(myPicturesJson);
  const myPictures = JSON.parse(stringifiedJson);

  myPictures.forEach((element, index) => {
    if (element.title === title) {
      const commentModel = document.querySelector('.comment-model');
      const commentCard = document.createElement('div');
      commentCard.classList.add('comment-card');
      commentCard.setAttribute('index', index);

      const closeIcon = document.createElement('div');
      closeIcon.classList.add('close-icon');
      const icon = document.createElement('i');
      icon.classList.add('fas', 'fa-times');
      closeIcon.appendChild(icon);

      const closeClick = () => {
        commentModel.classList.remove('active');
        commentModel.innerHTML = '';
      };

      closeIcon.addEventListener('click', closeClick);

      const mainDescription = document.createElement('div');
      mainDescription.classList.add('main-description');

      if (element.media_type === 'image') {
        const media = document.createElement('img');
        media.classList.add('mediaImage');
        media.src = element.url;
        mainDescription.appendChild(media);
      } else {
        const media = document.createElement('iframe');
        media.classList.add('mediaVideo');
        media.src = element.url;
        mainDescription.appendChild(media);
      }
      const h1 = document.createElement('h1');
      h1.classList.add('image-title');
      h1.innerText = element.title;

      const explanation = document.createElement('p');
      explanation.classList.add('image-explanation');
      explanation.innerText = element.explanation;

      const extraExplanation = document.createElement('p');
      const copyright = document.createElement('span');
      copyright.classList.add('copyright');
      copyright.innerText = `By ${element.copyright ?? 'Anonymous'}`;

      const imageDate = document.createElement('span');
      imageDate.classList.add('image-date');
      imageDate.innerText = `${element.date}`;
      extraExplanation.append(copyright, imageDate);

      const h2 = document.createElement('h2');
      h2.innerText = 'Comments ';
      const commentCounter = document.createElement('span');
      commentCounter.classList.add('comment-counter');

      h2.appendChild(commentCounter);

      const commentContainer = document.createElement('ul');
      commentContainer.classList.add('comment-container');

      const commentTitle = document.createElement('h2');
      commentTitle.innerText = 'Add a comment';

      const form = document.createElement('form');
      form.innerHTML = `
          <input type="text" placeholder="Your name" class="name-input" required autocomplete="off" />
          <textarea name="comment-input" class="comment-input" placeholder="Your insights..." required></textarea>
          <button type="submit">Comment</button>
          `;

      mainDescription.append(h1, explanation, extraExplanation, h2, commentContainer, commentTitle, form); // eslint-disable-line max-len
      commentCard.append(closeIcon, mainDescription);
      commentModel.appendChild(commentCard);

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        commentContainer.innerHTML = '';

        const username = document.querySelector('.name-input').value;
        const commentMessage = document.querySelector('.comment-input').value;
        const userID = commentCard.getAttribute('index');

        await addComments(username, commentMessage, userID);
        await displayComments(userID);

        form.reset();

        const counter = document.querySelector('.comment-counter');
        counter.innerText = `(${countComments()})`;
      });
    }
  });

  const commentCard = document.querySelector('.comment-card');
  const userID = commentCard.getAttribute('index');
  await displayComments(userID);

  const commentCounter = document.querySelector('.comment-counter');
  commentCounter.innerText = `(${countComments()})`;
};

export { showCommentCard as default };
