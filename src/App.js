import logo from './logo.svg';
import { StyledHeader } from './Components/Header';
import { StyledTitle, ColumnContainer, ContentWrapper } from './styles' 
import Article from './Components/Article';

import careersImage from "./Images/careers.png";
import codeImage from "./Images/code.png";
import laptopImage from "./Images/laptop.png";

/* Make the page look the same as in zeplin , same content and images */

/* Make <a> tags orange */

/* Make array with data for all columns and a field which represent which columns 
   the article should be displayed in */

const data = [
  { title: "DESIGN SYSTEM",
  headline: "How Do You Handle Component Spacing In A Design System ?",
  buttonText: "READ THIS",
  content: (<p>Say you’ve got a <strong>&lt; Card /&gt;</strong> component. 
            It’s highly likely it shouldn’t be butted right up against any 
            other components with no spacing around it. That’s true for… 
            pretty much every component. So, how do you handle component spacing 
            in a design system?</p>),
  column: 'left',

  image: undefined },

  { title: "FRONTEND",
  headline: "How to Favicon in 2022: Six files that fit most needs",
  buttonText: undefined,
  content: (<p>Editor’s note: With the arrival of the new year, 
            this post has been slightly modified to reflect 
            the fact that this content is still relevant!</p>),
  column: 'left',

  image: laptopImage },

  {
    title: 'COLORS',
    headline: 'A whistle-stop tour of 4 new CSS color features',
    column: 'center',

    content: (<>
                <p>I was just writing in my <a href="#">“What’s new in since CSS3?”</a> article about 
                   recent and possible future changes to CSS colors. It’s weirdly a lot. There are just as 
                   many or more new and upcoming ways to define colors than what we have now. I thought we’d take a really quick look.</p>
                <p>First, a major heads up. This stuff is so complicated. I barely understand it. But here are some aspects:</p>
                <ul>
                  <li>Before all this upcoming change, we only had RGB as a color model, and everything dealt with that.</li>
                  <li>We had different “color spaces” that handled it differently (e.g. the rgb() function 
                      mapped that RGB color model as a cube with linear coordinates, the hsl() function 
                      mapped that RGB color model as a cylinder) but it was all sRGB gamut.</li>
                  <li>With the upcoming changes, we’re getting new color models and (!) we’re getting 
                      new functions that map that color model differently. So I think it’s kind of a double-triple whammy.</li>
                </ul>
              </>
            ),
            image:codeImage
          },
          {
            title: 'SUBSCRIPTION',
            headline: 'Stay tuned & get new updates',
            column: 'center',

            content: (<p>If you'd like to know when we release additional results or announce next year's edition, just leave us your email below</p>),
          },
          { title: "WEB & MOBILE DEVELOPMENT",
          headline: "Building an adaptive favicon",
          column: 'right',
          content: (<p>A custom favicon is a great way to polish a web project. 
                       It displays on desktop browser tabs, and also inside 
                       "save for later" readers, other blog posts linking to 
                       your site, and more. Traditionally this has been done 
                       with the .ico file type, but recently browsers have 
                       allowed use of SVG, a vector format.</p>),
          image: undefined },
      
          { title: "FRONTEND",
          headline: "Looking for you!",
          buttonText: undefined,
          column: 'right',

          content: (<p>As part of your role, you will have the opportunity to develop from scratch, working closely with the product, design, and QA teams to deliver the best product.
            This is a great opportunity to join us and grow with other team members.
            
            Send CV to Jobsil@abra-it.com</p>),
          image: careersImage 
  },
    
]
let leftData = [];
let centerData = [];
let rightData = [];


for (let i=0;i<data.length;i++) {
  switch(data[i].column) {
    case "left":
      leftData.push(data[i]);
      break;
    case "center":
      centerData.push(data[i]);
      break;
    case "right":
    default:
      rightData.push(data[i]);
      break;
  }
}
        
const columns = [
  { data : leftData,
    isBig : true,
  },
  { data : centerData,
    isBig : false,
  },
  { data : rightData,
    isBig : false,
  }
];

function App() {
  return (
    <div className="App">
      <StyledHeader></StyledHeader>
      <StyledTitle>Latest updates</StyledTitle>
      <ContentWrapper>

        { columns.map(column => {
          return (
          <>
            <ColumnContainer big={column.isBig}>
              { column.data.map((item, idx, arr)=> {
              return (
                <>
                <Article title={item.title}
                        headline={item.headline}
                        image={item.image}
                        buttonText={item.buttonText}
                        >
                  {item.content}
                </Article>
                  {arr.length-1 !== idx && <hr></hr>}
                </>
              )
            })}
        </ColumnContainer>

          </>
          )
        })}

      </ContentWrapper>
    </div>
  );
}

export default App;
