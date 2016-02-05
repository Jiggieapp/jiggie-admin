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
    this.transitionTo('/app/events');
  },
  componentDidMount: function() {
    Messenger.options = {
      theme: 'flat'
    };
    $(function () {
      $('.datetimepicker1').datetimepicker();
      $('.datetimepicker2').datetimepicker();
      $('.datetimepicker3').datetimepicker();
  });
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
      message: 'Succes Add New Events',
      showCloseButton: true
    });
  },
  getInitialState: function() {
  return {data: []};
  },
  handleSubmit: function(e) {

  /////handle form
  e.preventDefault();
  title = React.findDOMNode(this.refs.title).value.trim();
  description = React.findDOMNode(this.refs.description).value.trim();
  venue_name = React.findDOMNode(this.refs.venue_name).value.trim();
  start_datetime_str = React.findDOMNode(this.refs.start_datetime_str).value.trim();
  end_datetime_str = React.findDOMNode(this.refs.end_datetime_str).value.trim();
  lokasi = React.findDOMNode(this.refs.lokasi).value.trim();
  date_full = React.findDOMNode(this.refs.date_full).value.trim();
  rank = React.findDOMNode(this.refs.rank).value.trim();
  fullfillment_type = React.findDOMNode(this.refs.fullfillment_type).value.trim();
  fullfillment_value = React.findDOMNode(this.refs.fullfillment_value).value.trim();
  event_type = React.findDOMNode(this.refs.event_type).value.trim();
  status = React.findDOMNode(this.refs.status).value.trim();
  tags = React.findDOMNode(this.refs.tags).value.trim();
  source = React.findDOMNode(this.refs.source).value.trim();
  photos = React.findDOMNode(this.refs.photos).value.trim();

  /// if empty
  if (!title) {
    this.errorNotificationValidate();
    return;
  }
  ///from form data
  var today = new Date().toLocaleDateString();
  var formData = {

    title : title,
    description : description,
    venue_name : venue_name,
    start_datetime_str : start_datetime_str,
    end_datetime_str : end_datetime_str,
    location : lokasi,
    date_full : date_full,
    rank : rank,
    fullfillment_type : fullfillment_type,
    fullfillment_value : fullfillment_value,
    event_type : event_type,
    status : status,
    tags :tags,
    source : source,
    photos : photos
  };
  $.ajax({
    //url: serviceUrl+'users',
    url: 'http://localhost:9000/api/events',
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
     this.state.data;
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
                               <h3>Add New Events</h3>
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
                                      <Label htmlFor='firstname'>Title</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-ikons-user' />
                                        </InputGroupAddon>
                                        <Input autoFocus type='text' id='title' placeholder='Title Events' ref="title" name="title" value={this.state.data.title}/>

                                      </InputGroup>
                                    </FormGroup>


                                    <FormGroup>
                                      <Label htmlFor='description'>Description</Label>
                                      <Textarea id='description' rows='3' placeholder='Description' ref="description" name="description" value={this.state.data.description}/>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='lastname'>Venue Name</Label>
                                      <VenueList id='venue_name' ref="venue_name" name="venue_name" />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='lastname'>Events Start</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-calendar-2'/>
                                        </InputGroupAddon>
                                        <Input type='text' className='datetimepicker1' id='start_datetime_str' placeholder='Event Start' ref="start_datetime_str" name="start_datetime_str" value={this.state.data.start_datetime_str}/>

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='lastname'>Events Ends</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-calendar-2' />
                                        </InputGroupAddon>
                                        <Input type='text' className='datetimepicker2' id='end_datetime_str' placeholder='Event Ends' ref="end_datetime_str" name="end_datetime_str" value={this.state.data.end_datetime_end}/>

                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label htmlFor='description'>Location</Label>
                                      <Textarea id='lokasi' rows='3' placeholder='Event Location' ref="lokasi" name="lokasi" value={this.state.data.lokasi}/>
                                    </FormGroup>

                                </Col>

                                <Col xs={6}>

                                  <FormGroup>
                                    <Label htmlFor='lastname'>Events Dates</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar-1' />
                                      </InputGroupAddon>
                                      <Input type='text' className='datetimepicker3' id='date_full' placeholder='Date Events' ref="date_full" name="date_full" value={this.state.data.date_full}/>

                                    </InputGroup>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label htmlFor='rank'>Ranking</Label>
                                    <Select id='rank' defaultValue='1' ref="rank" name="rank">
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>

                                    </Select>
                                  </FormGroup>

                                  <FormGroup>
                                    <Label htmlFor='lastname'>Fullfillment Type</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar' />
                                      </InputGroupAddon>
                                      <Input type='text' id='fullfillment_type' placeholder='Fullfillment Type' ref="fullfillment_type" name="fullfillment_type" value={this.state.data.fullfillment_type}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Fullfillment Value</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar' />
                                      </InputGroupAddon>
                                      <Input type='text' id='fullfillment_value' placeholder='Fullfillment Value' ref="fullfillment_value" name="fullfillment_value" value={this.state.data.fullfillment_value}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Events Type</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar' />
                                      </InputGroupAddon>
                                      <Input type='text' id='event_type' placeholder='Events Type' ref="event_type" name="event_type" value={this.state.data.event_type}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Events status</Label>
                                      <Select id='status' defaultValue='draft' ref="status" name="status">
                                        <option value='draft'>Draft</option>
                                        <option value='published'>Published</option>


                                      </Select>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Events Tags</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar' />
                                      </InputGroupAddon>
                                      <Input type='text' id='tags' placeholder='Events Tags' ref="tags" name="tags" value={this.state.data.tags}/>

                                    </InputGroup>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor='lastname'>Events Input</Label>
                                    <InputGroup>
                                      <InputGroupAddon>
                                        <Icon glyph='icon-fontello-calendar' />
                                      </InputGroupAddon>
                                      <Input type='text' id='source' placeholder='Events Input' ref="source" name="source" value={this.state.data.source}/>

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
var VenueList = React.createClass({
  getInitialState: function(){
     return {data: []};
  },
  loadFromServer: function() {
    $.ajax({
      //http://jiggie.herokuapp.com/admin/admin/users/list?admin_token=dsabalsdbaiyzVYVKJD78t87tgBQGK9sfhkslhfdksCFCJjgvgKV98y98h90z3pd&per_page=100
      //url: serviceUrl + UrlTable +'/List?admin_token=' + Token + '&per_page=' + Pages,
      url: 'http://localhost:9000/api/venues',
      dataType: 'json',
      cache: false,
      success: function(data) {
        //console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
      //console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadFromServer();
  },
    render: function() {

      //var row = this.state.data;

      return (

        <Select id='venue_name'  ref="venue_name" name="venue_name">
           {
               this.state.data.map(function(venue) {
                 return <option value={venue.name}>{venue.name}</option>

               })
           }
      </Select>



      )

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
