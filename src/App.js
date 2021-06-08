
import './App.css';

import Greet from './components/05_Funtional Component/Greet'
import Welcome from './components/06_Class Component/Welcome'
import Hello from './components/08_JSX/Hello'
import Hello_prop_func from './components/09_Prop/Hello_prop_func';
import Hello_prop_class from './components/09_Prop/Hello_prop_class';
import Message from './components/10_State/Message'
import Counter from './components/11_SetState/Counter'
import WelcomeToHero from './components/12_Destructuring props and state/WelcomeToHero'
import HelloToHero from './components/12_Destructuring props and state/HelloToHero'
import FunctionClick from './components/13_Event/FunctionClick'
import ClassClick from './components/13_Event/ClassClick'
import EventBind from './components/14_Binding Event Hendler/EventBind'
import ParentComponent from './components/15_Methods as props/ParentComponent'
import UserGreeting from './components/16_Conditional Rendering/UserGreeting'
import NameList from './components/17&18_List Rendering and Lists and Keys/NameList'
import NameArray from './components/19_Index as KeyAnti-Pattern/NameArray'
import StyleSheet from './components/20_Styling and CSS Basics/StyleSheet'
import Inline from './components/20_Styling and CSS Basics/Inline'
import appStyle from './components/appStyle.css'
import styles from './components/appStyle.module.css'
import Form from './components/21_Basic Form Handling/Form'
import LifecycleA from './components/23_Component Mountnig Lifecycle Methods/LifecycleA'
import LifecycleC from './components/24_Component Updating Lifecycle Methods/LifecycleC'
import FragmentDemo from './components/25_Fragment/FragmentDemo';
import Table from './components/25_Fragment/Table';
import ParentComp from './components/26&27_Pure Component and Memo/ParentComp';
import Refs from './components/28_Refs/Refs';
import FocusInput from './components/29_Ref with Class Component/FocusInput';
import FRParentInput from './components/30_Forwarding Refs/FRParentInput';
import PortalDemo from './components/31_Portals/PortalDemo';
import ErrorHero from './components/32_Error Handling Phase Methods/ErrorHero';
import ErrorBoundary from './components/32_Error Handling Phase Methods/ErrorBoundary';
import ClickCount from './components/33_HOC part 1/ClickCount';
import HoverCount from './components/33_HOC part 1/HoverCount';
import ClickCounter02 from './components/34_HOC part 2/ClickCounter02';
import HoverCount02 from './components/34_HOC part 2/HoverCount02';
import ClickCounter03 from './components/35_HOC part 3/ClickCounter03';
import HoverCount03 from './components/35_HOC part 3/HoverCount03';
import ClickCounterTwo from './components/36_Render Props part 1/ClickCounterTwo';
import HoverCountTwo from './components/36_Render Props part 1/HoverCountTwo';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />   */}
        {/* <code>Hello World</code> */}
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}

        {/* 09_Props */}
        {/* <Hello_prop_func name='Bruce' heroName='Bat Man'>
          <p>children element</p>
        </Hello_prop_func>
        <Hello_prop_func name='Clark' heroName='Superman'>
          <button>Action</button>
        </Hello_prop_func>
        <Hello_prop_func name='Diana' heroName='Wonder Woman'></Hello_prop_func>
        <Hello_prop_class name="Bruce" heroName="Bat Man"></Hello_prop_class>
        <Hello_prop_class name="Clark" heroName="Superman"></Hello_prop_class>
        <Hello_prop_class name="Diana" heroName="Wonder Wonmam"></Hello_prop_class> */}

        {/* <Message /> */}

        {/* <Counter /> */}

        {/* <HelloToHero name="Bruce" heroName="Bat Man">
          <p>children element</p>
        </HelloToHero>
        <HelloToHero name="Clark" heroName="Superman">
          <button>Action</button>
        </HelloToHero>
        <HelloToHero name="Diana" heroName="Wonder Wonman"></HelloToHero>
        
        <WelcomeToHero name="Bruce" heroName="Bat Man"></WelcomeToHero>
        <WelcomeToHero name="Clark" heroName="Superman"></WelcomeToHero>
        <WelcomeToHero name="Diana" heroName="Wonder Wonmam"></WelcomeToHero> */}

        {/* <FunctionClick />
        <ClassClick /> */}
        
        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}

        {/* <NameArray /> */}

        {/* <StyleSheet primary={true}/>
        <StyleSheet primary={false}/>
        <Inline />
        <p className='error'>test style</p>
        <p className={styles.success}>test style</p> */}

        {/* <Form /> */}

        {/* <LifecycleA /> */}

        {/* <LifecycleC /> */}

        {/* <FragmentDemo />
        <Table /> */}

        {/* <ParentComp /> */}

        {/* <Refs /> */}

        {/* <FocusInput /> */}

        {/* <FRParentInput /> */}

        {/* <PortalDemo /> */}
        
        { /* not a good idea to hide other component when one of the component has an error */}
        {/* <ErrorBoundary>
          <ErrorHero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorHero heroName="Joker"/>
        </ErrorBoundary> */}
        
        {/* <ClickCount />
        <HoverCount /> */}

        {/* <ClickCounter02 />
        <HoverCount02/> */}

        {/* <ClickCounter03 name={'Sam'}/>
        <HoverCount03 name={'Sam'}/> */}

        <ClickCounterTwo />
        <HoverCountTwo />
      </header>
    </div>
  );
}

export default App;
