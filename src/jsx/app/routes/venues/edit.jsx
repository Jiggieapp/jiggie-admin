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
    this.transitionTo('/app/venues');
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
      message: 'Succes Updated Venues',
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
    url: 'http://localhost:9000/api/venues/'+ id,
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
  nama = React.findDOMNode(this.refs.nama).value.trim();
  deskripsi = React.findDOMNode(this.refs.deskripsi).value.trim();
  phone = React.findDOMNode(this.refs.phone).value.trim();
  url = React.findDOMNode(this.refs.url).value.trim();
  address = React.findDOMNode(this.refs.address).value.trim();
  address2 = React.findDOMNode(this.refs.address2).value.trim();
  rank = React.findDOMNode(this.refs.rank).value.trim();
  neighborhood = React.findDOMNode(this.refs.neighborhood).value.trim();
  city = React.findDOMNode(this.refs.city).value.trim();
  zip = React.findDOMNode(this.refs.zip).value.trim();
  long = React.findDOMNode(this.refs.long).value.trim();
  lat = React.findDOMNode(this.refs.lat).value.trim();
  photos= React.findDOMNode(this.refs.photos).value.trim();

  /// if empty
  if (!id) {
    this.errorNotificationValidate();
    return;
  }
  ///from form data
  var today = new Date().toLocaleDateString();
  var formData = {

    name: nama,
    description: deskripsi,
    phone: phone,
    url: url,
    address: address,
    address2: address2,
    rank: rank,
    neighborhood: neighborhood,
    city: city,
    zip: zip,
    long: long,
    lat: lat,
    photos : photos
    //updated_at : today
  };
  $.ajax({
    //url: serviceUrl+'users',
    url: 'http://localhost:9000/api/venues/' + id,
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
                               <h3 style={{textTransform: 'capitalize'}}>Edit Venues - {row.name}</h3>
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
                                    <Label htmlFor='firstname'><img src={row.photos} width='150' height='150' style={{borderRadius: '100%'}}/></Label>
                                  </FormGroup>
                                  <FormGroup>


                                      <Input autofocus type='hidden' id='id' placeholder='id' ref="id" name="id" value={row._id}/>


                                  </FormGroup>

                                    <FormGroup>
                                      <Label htmlFor='firstname'>Name Venue</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input autofocus type='text' id='nama' placeholder='Venue Name' ref="nama" name="nama" value={this.state.data.name} onChange={this.handleChange}/>

                                      </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                      <Label htmlFor='address'>Description</Label>
                                      <Textarea id='deskripsi' rows='3' placeholder='Description' ref="deskripsi" name="deskripsi" value={this.state.data.description} onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='firstname'>Phone Number</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-phone' />
                                        </InputGroupAddon>
                                        <Input autofocus type='text' id='phone' placeholder='Phone' ref="phone" name="phone" value={this.state.data.phone} onChange={this.handleChange}/>

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='firstname'>Website Url</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-outlined-website-1' />
                                        </InputGroupAddon>
                                        <Input autofocus type='text' id='url' placeholder='http://' ref="url" name="url" value={this.state.data.url} onChange={this.handleChange}/>

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='address'>Address</Label>
                                      <Textarea id='address' rows='3' placeholder='address' ref="address" name="address" value={this.state.data.address} onChange={this.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='address2'>Address2</Label>
                                      <Textarea id='address2' rows='3' placeholder='address2' ref="address2" name="address2" value={this.state.data.address2} onChange={this.handleChange}/>
                                    </FormGroup>


                                </Col>

                                <Col xs={6}>
                                  <FormGroup>
                                    <Label htmlFor='rank'>Ranking</Label>
                                    <Select id='rank' defaultValue={this.state.data.rank} ref="rank" name="rank" >
                                      <option value={this.state.data.rank}>{this.state.data.rank}</option>
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>

                                    </Select>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Neighborhood</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-location-8' />
                                      </InputGroupAddon>
                                      <Input type='text' id='neighborhood' placeholder='neighborhood' ref="neighborhood" name="neighborhood" value={this.state.data.neighborhood} onChange={this.handleChange}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='zip'>Zip Code</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar-2' />
                                      </InputGroupAddon>
                                      <Input type='text' id='zip' placeholder='Zip Code' ref="zip" name="zip" value={this.state.data.zip} onChange={this.handleChange}/>

                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label htmlFor='lastname'>City</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-location-8' />
                                      </InputGroupAddon>
                                      <Input type='text' id='city' placeholder='City' ref="city" name="city" value={this.state.data.city} onChange={this.handleChange}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Longitute Map</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-location-7' />
                                      </InputGroupAddon>
                                      <Input type='text' id='long' placeholder='Longitute Maps' ref="long" name="long" value={this.state.data.long} onChange={this.handleChange}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Latitute Map</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-location-7' />
                                      </InputGroupAddon>
                                      <Input type='text' id='lat' placeholder='Latitute Maps' ref="lat" name="lat" value={this.state.data.lat} onChange={this.handleChange}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Photos Url</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-ikons-user' />
                                      </InputGroupAddon>
                                      <Input type='text' id='photos' placeholder='photos' ref="photos" name="photos" value={this.state.data.photos} onChange={this.handleChange}/>

                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup>
                                    <HelpBlock>
                                      Max allowed size:2MB <br></br>Allowed file types :png,jpg
                                    </HelpBlock>
                                  </FormGroup>
                                  <div>
                                    <Button outlined bsStyle='lightgreen' onClick={this.backMember}>cancel</Button>{' '}
                                    <Button outlined bsStyle='lightgreen' type="submit" >submit</Button>
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
