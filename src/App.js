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

const leftData = [
  { title: "DESIGN SYSTEM",
    headline: "How Do You Handle Component Spacing In A Design System ?",
    buttonText: "READ THIS",
    content: (<p>Say you’ve got a <strong>&lt; Card /&gt;</strong> component. 
              It’s highly likely it shouldn’t be butted right up against any 
              other components with no spacing around it. That’s true for… 
              pretty much every component. So, how do you handle component spacing 
              in a design system?</p>),

    image: undefined },

    { title: "FRONTEND",
    headline: "How to Favicon in 2022: Six files that fit most needs",
    buttonText: undefined,
    content: (<p>Editor’s note: With the arrival of the new year, 
              this post has been slightly modified to reflect 
              the fact that this content is still relevant!</p>),
    image: laptopImage },

]
function App() {
  return (
    <div className="App">
      <StyledHeader></StyledHeader>
      <StyledTitle>Latest updates</StyledTitle>
      <ContentWrapper>
        <ColumnContainer>
          { leftData.map(item => {
            return (
              <>
              <Article title={item.title}
                       headline={item.headline}
                       image={item.image}
                       buttonText={item.buttonText}
                       >
                {item.content}
              </Article>
                <hr></hr>
              </>
            )
          })}
        </ColumnContainer>
        <ColumnContainer big>
        { leftData.map(item => {
            return (
              <>
              <Article title={item.title}
                       headline={item.headline}
                       image={item.image}
                       buttonText={item.buttonText}
                       >
                {item.content}
              </Article>
                <hr></hr>
              </>
            )
          })}
  
        </ColumnContainer>

        <ColumnContainer>
          <Article title="DESIGN SYSTEM" 
                  headline="How Do You Handle Component Spacing In A Design System ?">
            Say you’ve got a <strong>&lt; Card /&gt;</strong> component. It’s highly likely it shouldn’t be butted right up against any other components with no spacing around it. That’s true for… pretty much every component. So, how do you handle component spacing in a design system?
          </Article>
          <hr></hr>
          <Article title="FRONTEND" 
                  headline="How to Favicon in 2022: Six files that fit most needs">
            Editor’s note: With the arrival of the new year, this post has been slightly modified to reflect the fact that this content is still relevant!
          </Article>
        </ColumnContainer>

      </ContentWrapper>
    </div>
  );
}

export default App;
