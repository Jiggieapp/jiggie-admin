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
  backMember: function() {
    //preventDefault();
    //stopPropagation();
    this.transitionTo('/app/members');
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
      message: 'Succes Add New Members',
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
    url: 'http://localhost:9000/api/users/'+ id,
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
  gender = React.findDOMNode(this.refs.gender).value.trim();
  about = React.findDOMNode(this.refs.about).value.trim();
  birthday = React.findDOMNode(this.refs.birthday).value.trim();
  lokasi = React.findDOMNode(this.refs.lokasi).value.trim();
  photos = React.findDOMNode(this.refs.photos).value.trim();

  /// if empty
  if (!id || !first_name) {
    this.errorNotificationValidate();
    return;
  }
  ///from form data
  var today = new Date().toLocaleDateString();
  var formData = {

    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
    about: about,
    birthday: birthday,
    location: lokasi,
    profile_image_url: photos,
    created_at : today
  };
  $.ajax({
    //url: serviceUrl+'users',
    url: 'http://localhost:9000/api/users',
    //data: JSON.stringify({ customer: customer }),
    //data: {customer: JSON.stringify(customer)},
    data : formData,
    type: 'POST',
    dataType: 'json',
    traditional: true,
    cache: false,
    success: function(data) {
    //console.log(data)
    this.successNotification();
    this.backMember();
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

  render: function() {
     var row = this.state.data;
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
                               <h3 style={{textTransform: 'capitalize'}}>Edit Members - {row.first_name} {row.last_name}</h3>
                             </Col>
                             <Col xs={6}>

                             </Col>
                           </Row>
                         </Grid>
                       </PanelHeader>
                        <PanelBody>
                          <Grid>
                            <Row>
                              <Form onSubmit={this.handleSubmit}>
                                <Col xs={6}>

                                    <FormGroup>
                                      <Label htmlFor='firstname'><img src={row.profile_image_url} width='150' style={{borderRadius: '100%'}}/></Label>
                                    </FormGroup>

                                    <FormGroup>
                                      <Label htmlFor='firstname'>First Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input autofocus type='text' id='first_name' placeholder='First Name' ref="first_name" name="first_name" value={this.state.data.first_name}/>

                                      </InputGroup>
                                    </FormGroup>


                                    <FormGroup>
                                      <Label htmlFor='lastname'>Last Name</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input type='text' id='last_name' placeholder='Last Name' ref="last_name" name="last_name" value={this.state.data.last_name}/>

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='lastname'>Email</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-mail' />
                                        </InputGroupAddon>
                                        <Input type='email' id='email' placeholder='Email' ref="email" name="email" value={this.state.data.email}/>

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='gender'>Gender</Label>
                                      <Select id='gender' defaultValue={row.gender} ref="gender" name="gender">
                                        <option value={row.gender}>{row.gender}</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>

                                      </Select>
                                    </FormGroup>

                                </Col>

                                <Col xs={6}>
                                  <FormGroup>
                                    <Label htmlFor='about'>About</Label>
                                    <Textarea id='about' rows='3' placeholder='about' ref="about" name="about" value={this.state.data.about}/>
                                  </FormGroup>


                                  <FormGroup>
                                    <Label htmlFor='lastname'>Birthday</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar-2' />
                                      </InputGroupAddon>
                                      <Input type='text' id='birthday' placeholder='birthday' ref="birthday" name="birthday" value={this.state.data.birthday}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Location</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-location-8' />
                                      </InputGroupAddon>
                                      <Input type='text' id='lokasi' placeholder='location' ref="lokasi" name="lokasi" value={this.state.data.location}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Photos Url</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-ikons-user' />
                                      </InputGroupAddon>
                                      <Input type='text' id='photos' placeholder='photos' ref="photos" name="photos" value={this.state.data.photos}/>

                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup>
                                    <HelpBlock>
                                      Max allowed size:2MB <br></br>Allowed file types :png,jpg
                                    </HelpBlock>
                                  </FormGroup>
                                  <div>
                                    <Button outlined bsStyle='lightgreen' onClick={this.backMember}>cancel</Button>{' '}
                                    <Button outlined bsStyle='lightgreen' type="submit" >Update</Button>
                                  </div>
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
