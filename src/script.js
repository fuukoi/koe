/* C A R D */
const card = document.querySelector('.card');
const text = document.querySelector('.card-text');
let p;

function mouseMove(e){
    let mX = e.clientX,
        mY = e.clientY,
        lX = (mX - p.x),
        tY = (mY - p.y),
        c  = {
            x: lX - p.width / 2,
            y: tY - p.height / 2
        },
        d  = Math.sqrt(c.x**2 + c.y**2);

    card.style.transform = 'scale3d(1.07, 1.07, 1.07) rotate3d('+(c.y / 100)+', '+(-c.x / 100)+', 0, '+(Math.log(d) * 2)+'deg)';
    
    text.style.transform = 'scale3d(1.07, 1.07, 1.07) rotate3d('+(c.y / 100)+', '+(-c.x / 100)+', 0, '+(Math.log(d) * 2)+'deg)';

    card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${c.x * 2 + p.width/2}px
      ${c.y * 2 + p.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

card.onmouseover = function(){
    p = card.getBoundingClientRect();
    document.addEventListener('mousemove', mouseMove);
}
card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', mouseMove);
    card.style.transform = '';
    card.style.background = '';
  });
/* C A R D   E N D */ 



const netlifyIdentity = require('netlify-identity-widget');

netlifyIdentity.init({
  container: '#netlify-modal' // defaults to document.body,
});

netlifyIdentity.open(); // open the modal
netlifyIdentity.open('login'); // open the modal to the login tab
netlifyIdentity.open('signup'); // open the modal to the signup tab

netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('open', () => console.log('Widget opened'));
netlifyIdentity.on('close', () => console.log('Widget closed'));

// Close the modal
netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();

// Access the underlying GoTrue JS client.
// Note that doing things directly through the GoTrue client brings a risk of getting out of
// sync between your state and the widget’s state.
netlifyIdentity.gotrue;


// Open the modal
netlifyIdentity.open();

// Get the current user:
const user = netlifyIdentity.currentUser();

// Bind to events
netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('open', () => console.log('Widget opened'));
netlifyIdentity.on('close', () => console.log('Widget closed'));

// Close the modal
netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();