import { Form, Label, Input, Heading } from "theme-ui";

const RegistrationForm = () => {
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <Box>
      <Box>
        <Heading as="h2">Nifty World Cup 2022!</Heading>
        <Heading as="h4">
          A stock market trading competition between India's top stock experts
          to find out who is the best! You get the chance to win amazing prizes
          just by trading during the Football World Cup
        </Heading>
      </Box>
      <Box as="form" onSubmit={(e) => onSubmit(e)}>
        <Box>
          <Box>
            <Label htmlFor="FirstName">First Name</Label>
            <Input name="FirstName" id="firstName" mb={3} />
          </Box>
          <Box>
            <Label htmlFor="lastName">Last Name</Label>
            <Input name="Last Name" id="lastName" mb={3} />
          </Box>
        </Box>
        <Box>
          <Label htmlFor="socialLink">Social Profile</Label>
          <Input name="Social profile" id="socialLink" mb={3} />
        </Box>
        <Box>
          <Label html="phone">Phone Number</Label>
          <Input name="Phone" id="phone" mb={3} />
        </Box>
        <Box>
          <Label html="email">Email</Label>
          <Input name="email" id="email" mb={3} />
        </Box>
        <Box>
          <Label html="checkbox">Terms & Conditions</Label>
          <Box as="p">
            Please note this competition is for Stock Market Experts who have
            atleast 2 years of experience and 1K+ followers on a social
            platform. If you are a retail investor/trader, follow the top
            experts at https://go.investwithtribe.com/ue96L
          </Box>
          <Box as="p">
            <Input name="checkbox">I accept the terms & conditions</Input>
          </Box>
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
