import profile from './dharithri.jpg';
import './App.css';

function App() {
  return (
    <body>
      <div>
        <img
        class="profile-band-image"
        src={profile}
      />
</div>
      <a href="#My_Achievements"> click to view my Achievements. </a>
      <h1>Dharithri Rai B</h1>

      <hr />
      <h3>About me</h3>
      <p>
        I am Dharithri rai b currently persuing BE at computer science student
        in sahyadri college of engineering and management.I am from mangalore.My
        objective is to to be a part of an organization where I can fully
        utilize my skills and make significant contribution to the success of
        the company and at the same time to obtain knowledge from the job and
        develop professionally.
      </p>
      <hr />
      <h3>My hobbies</h3>
      <p>
        My hobbie is to draw, paint, creative works and coin collection.When i
        feel bored i like to spend time with my pets and listen to music.
      </p>
      <hr />
      <h3>My Qualification</h3>
      <ul>
        <li>10 nth at St.Theresa's School in Mangalore</li>
        <li>12 th at Expert Pre University College in Mangalore</li>
        <li>
          BE in computer science and engineering at Sahyadri College Of of
          engineering and management in Mangalore
        </li>
      </ul>
      <hr />
      <h3>My Favorite Food</h3>
      <ol>
        <li>veg</li>
        <ul>
          <li>French fries</li>
          <li>Indian food</li>
          <li>Pizza</li>
        </ul>
        <li>Non veg</li>

        <ul>
          <li>Sea food</li>
        </ul>
      </ol>
      <hr />
      <h3>My Strength</h3>
      <table>
        <tr>
          <th>Qualities</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Communication</td>
          <td>I am good ar networking with people.</td>
        </tr>
        <tr>
          <td>Determination</td>
          <td>
            I work with focus and always work hard to complete the task alloted
            to me.
          </td>
        </tr>
        <tr>
          <td>Leadership Qualities</td>
          <td>I like to work in a team and lead the team.</td>
        </tr>
      </table>
      <hr />
      <h3>My Weekness</h3>
      <table>
        <tr>
          <th>Qualities</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Sensitive</td>
          <td>I am a sensitive girl.</td>
        </tr>
      </table>
      <h3 id="My_Achievements">My Achievements</h3>
      <ul>
        <li>Won 3rd in Interschool Lamp-making competition in 10th</li>
        <li>Won 1st in Flower arrangement competition in 1st PUC</li>
        <li>
          Participated and won prize in ROBOVEDA'19 at SNIST at Hyderabad in 1st
          year BE
        </li>
        <li>
          Project-Dysmmenohrea Massager Belt got approved at prototype stage and
          qualified further in IIC conducted by MHRD
        </li>
      </ul>
      <a href="index.html"> click to view my profile. </a>
    </body>
  );
}
export default App;