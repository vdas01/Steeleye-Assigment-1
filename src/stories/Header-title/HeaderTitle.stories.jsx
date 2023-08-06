import HeaderTitle from "./HeaderTitle";

export default  {
   title: "Header",
   component:HeaderTitle
}

// export const Header1 = () => <HeaderTitle secondaryTitle="Secondary1" primaryTitle="Primary1"/>
// export const Header2 = () => <HeaderTitle secondaryTitle="Secondary2" primaryTitle="Primary2"/>
// export const Header3 = () => <HeaderTitle secondaryTitle="Secondary3" primaryTitle="Primary3"/>

const Template = args => <HeaderTitle {...args}/>
export const Header1 = Template.bind({});
Header1.args = {
    secondaryTitle:"Secondary1",
    primaryTitle:"Primary1",
    bgcolor:"Blue",
    fcolor:"White",
    display:"span"
}

export const Header2 = Template.bind({});
Header2.args = {
    secondaryTitle:"Secondary2",
    primaryTitle:"Primary2",
    bgcolor:"Yellow",
    fcolor:"Black",
    display:"span"
}

export const Header3 = Template.bind({});
Header3.args = {
    secondaryTitle:"Secondary3",
    primaryTitle:"Primary3",
    bgcolor:"Blue",
    fcolor:"White",
    display:"span"
}