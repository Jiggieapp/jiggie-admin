import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  onChange: function() {
    console.log('onChange');
  },
  backMember: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/members');
  },
  //componentDidMount: function() {
    //$('#example')
    //  .addClass('nowrap')
    //  .dataTable({
      //  responsive: true,
        //columnDefs: [
          //{ targets: [-1, -3], className: 'dt-body-right' }
        //]
    //});
  //},
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                   <Panel>
                       <PanelHeader className='bg-darkgreen45 fg-white' style={{marginBottom: 20}}>
                         <Grid>
                           <Row>
                             <Col xs={6}>
                               <h3>Add New Members</h3>
                             </Col>
                             <Col xs={6}>
                              
                             </Col>
                           </Row>
                         </Grid>
                       </PanelHeader>
                        <PanelBody>
                          <Grid>
                            <Row>
                                <Col xs={6}>
                                  <Form>

                                    <FormGroup>
                                      <Label htmlFor='emailaddress'>Email address</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-mail' />
                                        </InputGroupAddon>
                                        <Input autoFocus type='email' id='emailaddress' placeholder='Email address' />
                                      </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                      <Label htmlFor='password'>Password</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-key' />
                                        </InputGroupAddon>
                                        <Input type='password' id='password' placeholder='Password' />

                                      </InputGroup>

                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='firstname'>First Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input type='text' id='first_name' placeholder='First Name' />

                                      </InputGroup>
                                    </FormGroup>


                                    <FormGroup>
                                      <Label htmlFor='lastname'>Last Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input type='text' id='last_name' placeholder='Last Name' />

                                      </InputGroup>
                                    </FormGroup>


                                    <FormGroup>
                                      <Label htmlFor='nickname'>Nick Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input type='text' id='nick_name' placeholder='Nick Name' />

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='about'>About</Label>
                                      <Textarea id='textarea' rows='3' placeholder='About You...' />
                                    </FormGroup>

                                  </Form>
                                </Col>
                                <Col xs={6}>


                                  <FormGroup>
                                    <Label>Gender</Label>
                                    <div>
                                      <Radio inline value='male' name='gender'>
                                        <Icon glyph='icon-fontello-user-male' />
                                        &nbsp;Male
                                      </Radio>
                                      <Radio inline value='female' defaultChecked name='gender'>
                                        <Icon glyph='icon-fontello-user-female' />
                                        &nbsp;
                                        Female
                                      </Radio>

                                    </div>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='birthday'>Birthday</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar-2' />
                                      </InputGroupAddon>
                                      <Input type='text' id='birthday' placeholder='Birthday' />

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='location'>Locations</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-location-8' />
                                      </InputGroupAddon>
                                      <Input type='text' id='location' placeholder='Location' />

                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label htmlFor='tagline'>Your Tagline</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-tag-7' />
                                      </InputGroupAddon>
                                      <Input type='text' id='tagline' placeholder='tagline' />

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label>Is Promoter</Label>
                                    <div>
                                      <Radio inline value='yes' name='promoter'>
                                        <Icon glyph='icon-dripicons-checkmark' />
                                        &nbsp; Yes
                                      </Radio>
                                      <Radio inline value='no' defaultChecked name='promoter'>
                                        <Icon glyph='icon-dripicons-cross' />
                                        &nbsp;
                                        No
                                      </Radio>

                                    </div>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label htmlFor='fileinput'>Profile Image</Label>
                                    <Input id='fileinput' type='file' />

                                  </FormGroup>
                                  <FormGroup>

                                    <Input id='fileinput' type='file' />

                                  </FormGroup>
                                  <FormGroup>

                                    <Input id='fileinput' type='file' />

                                  </FormGroup>
                                  <FormGroup>

                                    <Input id='fileinput' type='file' />
                                    <HelpBlock>
                                      Max allowed size:2MB <br></br>Allowed file types :png,jpg
                                    </HelpBlock>
                                  </FormGroup>
                                </Col>
                            </Row>
                          </Grid>
                        </PanelBody>
                        <PanelFooter className='bg-darkgreen45 text-right'>
                          <Grid>
                            <Row>
                              <Col xs={12}>
                                <br/>
                                <div>
                                  <Button outlined bsStyle='lightgreen' onClick={this.backMember}>cancel</Button>{' '}
                                  <Button outlined bsStyle='lightgreen'>submit</Button>
                                </div>
                                <br/>
                              </Col>
                            </Row>
                          </Grid>
                        </PanelFooter>
                   </Panel>
              </PanelContainer>
            </Col>

          </Row>
        </Grid>


      </Container>
    );
  }
});

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
