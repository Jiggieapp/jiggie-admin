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
  backAdmin: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/admin-user');
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
                               <h3>Add New Admin</h3>
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


                                  </Form>
                                </Col>
                                <Col xs={6}>
                                  <FormGroup>
                                    <Label htmlFor='role'>Roles</Label>
                                    <Select id='role' defaultValue='1'>
                                      <option value='1'>Super Administrator</option>
                                      <option value='2'>Administrator</option>
                                      <option value='3'>Admin</option>
                                      <option value='4'>Manager</option>
                                      <option value='5'>User</option>
                                    </Select>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label htmlFor='fileinput'>Profile Image</Label>
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
                                  <Button outlined bsStyle='lightgreen' onClick={this.backAdmin}>cancel</Button>{' '}
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
