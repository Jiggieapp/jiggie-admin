import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  onChange: function() {
    //console.log('onChange');
  },
  back: function() {
    //preventDefault();
    //stopPropagation();
    this.transitionTo('/app/admin-user');
  },
  componentDidMount: function() {
    Messenger.options = {
      theme: 'flat'
    };
  },
  errorNotificationValidate: function() {
    Messenger().post({
      id: 'error',
      type: 'error',
      singleton: true,
      message: 'Must Be Filled no Empty',
      showCloseButton: true
    });
  },
  errorNotification: function() {
    Messenger().post({
      id: 'error',
      type: 'error',
      singleton: true,
      message: 'Oop somethings Wrong',
      showCloseButton: true
    });
  },
  successNotification: function() {
    Messenger().post({
      id: 'success',
      type: 'success',
      singleton: false,
      message: 'Succes Updated Admin',
      showCloseButton: true
    });
  },
  getInitialState: function() {
  return {data: []};
  },
  loadFromServer: function() {
    var url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
  $.ajax({
    url: 'http://localhost:9000/api/admins/'+ id,
    dataType: 'json',
    cache: false,
    success: function(data) {
    this.setState({
      data : data
    });
    }.bind(this),
    error: function(xhr, status, err) {
    //console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
  },
  componentDidMount: function() {
  this.loadFromServer();
  //setInterval(this.loadFromServer, 1000);
  },
  handleSubmit: function(e) {

  /////handle form
  e.preventDefault();
  id = React.findDOMNode(this.refs.id).value.trim();
  first_name = React.findDOMNode(this.refs.first_name).value.trim();
  last_name = React.findDOMNode(this.refs.last_name).value.trim();
  email = React.findDOMNode(this.refs.email).value.trim();
  password = React.findDOMNode(this.refs.password).value.trim();
  roles = React.findDOMNode(this.refs.roles).value.trim();
  //photos = React.findDOMNode(this.refs.photos).value.trim();

  /// if empty
  if (!id) {
    this.errorNotificationValidate();
    return;
  }
  ///from form data
  var today = new Date().toLocaleDateString();
  var formData = {

    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    roles: roles
    //photos: photos
  };
  $.ajax({
    //url: serviceUrl+'users',
    url: 'http://localhost:9000/api/admins/' + id,
    //data: JSON.stringify({ customer: customer }),
    //data: {customer: JSON.stringify(customer)},
    data : formData,
    type: 'PUT',
    dataType: 'json',
    traditional: true,
    cache: false,
    success: function(data) {
    //console.log(data)
    this.successNotification();
    this.back();
    }.bind(this),
    error: function(xhr, status, err) {
    this.errorNotification();
    //console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
  return;
  },
  handleChange: function(event){
  data_array = [];
  for (var i in this.state.data) {
    if(i==event.target.name){
      data_array[i] = event.target.value
    }
    else{
      data_array[i] = this.state.data[i]
    }
  }
  this.setState({
    data : data_array
  });
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
                               <h3>Edit Admin - {this.state.data.first_name} {this.state.data.last_name}</h3>
                             </Col>
                             <Col xs={6}>

                             </Col>
                           </Row>
                         </Grid>
                       </PanelHeader>
                        <PanelBody>
                          <Grid>
                            <Row>
                              <Form onSubmit={this.handleSubmit} >
                                <Col xs={6}>

                                  <FormGroup>


                                      <Input  type='hidden' id='id' placeholder='id' ref="id" name="id" value={this.state.data._id}/>


                                  </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='emailaddress'>Email address</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-mail' />
                                        </InputGroupAddon>
                                        <Input autoFocus type='email' id='email' placeholder='Email address' ref="email" name="email" value={this.state.data.email} onChange={this.handleChange}/>
                                      </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                      <Label htmlFor='password'>Password</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-key' />
                                        </InputGroupAddon>
                                        <Input type='text' id='password' placeholder='Password' ref="password" name="password" value={this.state.data.password} onChange={this.handleChange}/>

                                      </InputGroup>

                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='firstname'>First Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input type='text' id='first_name' placeholder='First Name' ref="first_name" name="first_name" value={this.state.data.first_name} onChange={this.handleChange}/>

                                      </InputGroup>
                                    </FormGroup>


                                    <FormGroup>
                                      <Label htmlFor='lastname'>Last Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input type='text' id='last_name' placeholder='Last Name' ref="last_name" name="last_name" value={this.state.data.last_name} onChange={this.handleChange}/>

                                      </InputGroup>
                                    </FormGroup>



                                </Col>
                                <Col xs={6}>
                                  <FormGroup>
                                    <Label htmlFor='role'>Roles</Label>
                                    <Select id='roles' defaultValue='1' ref="roles" name="roles" value={this.state.data.roles} onChange={this.handleChange}>
                                      <option value={this.state.data.roles}>{this.state.data.roles}</option>
                                      <option value='super administrator'>Super Administrator</option>
                                      <option value='administrator'>Administrator</option>
                                      <option value='admin'>Admin</option>
                                      <option value='manager'>Manager</option>
                                      <option value='user'>User</option>
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
                                <Col xs={12}>
                                  <br/>
                                  <div>
                                    <Button outlined bsStyle='lightgreen' onClick={this.back}>cancel</Button>{' '}
                                    <Button outlined bsStyle='lightgreen' type="submit">submit</Button>
                                  </div>
                                  <br/>
                                </Col>
                                  </Form>
                            </Row>
                          </Grid>
                        </PanelBody>
                        <PanelFooter className='bg-darkgreen45 text-right'>
                          <Grid>
                            <Row>
                              <Col xs={12}>
                                <br/>

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
