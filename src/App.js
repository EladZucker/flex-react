import logo from './logo.svg';
import { StyledHeader } from './Components/Header';
import { StyledTitle, ColumnContainer, ContentWrapper } from './styles' 
import Article from './Components/Article';
function App() {
  return (
    <div className="App">
      <StyledHeader></StyledHeader>
      <StyledTitle>Latest updates</StyledTitle>
      <ContentWrapper>
        <ColumnContainer>
          <Article title="DESIGN SYSTEM" 
                  headline="How Do You Handle Component Spacing In A Design System ?"
                  buttonText="READ THIS">
            Say you’ve got a <strong>&lt; Card /&gt;</strong> component. It’s highly likely it shouldn’t be butted right up against any other components with no spacing around it. That’s true for… pretty much every component. So, how do you handle component spacing in a design system?
          </Article>
          <hr></hr>
          <Article title="FRONTEND" 
                  headline="How to Favicon in 2022: Six files that fit most needs">
            Editor’s note: With the arrival of the new year, this post has been slightly modified to reflect the fact that this content is still relevant!
          </Article>
        </ColumnContainer>
        <ColumnContainer big>
          <Article title="DESIGN SYSTEM" 
                  headline="How Do You Handle Component Spacing In A Design System ?">
            Say you’ve got a <strong>&lt; Card /&gt;</strong> component. It’s highly likely it shouldn’t be butted right up against any other components with no spacing around it. That’s true for… pretty much every component. So, how do you handle component spacing in a design system?
          </Article>
          <hr></hr>
          <Article title="SUBSCRIPTION" 
                  headline="Stay tuned & get new updates"
                  buttonText="SUBSCRIBE">
            If you'd like to know when we release additional results or announce next year's edition, just leave us your email below          
          </Article>
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
