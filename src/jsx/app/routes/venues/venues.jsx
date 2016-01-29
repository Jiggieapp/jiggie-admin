import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';
//import RowGroup from 'RowGroup';

var serviceUrl = 'http://jiggie-dev.herokuapp.com/admin/admin/';
var UrlTable = 'venues';
var Pages = '20';
var Token = 'dsabalsdbaiyzVYVKJD78t87tgBQGK9sfhkslhfdksCFCJjgvgKV98y98h90z3pd';
var intervalHandle = null;


var Body = React.createClass({
  mixins: [State, Navigation],
  getInitialState: function(){
    return {
       data: {
          venues: []
       }
    };
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
      if (this.isMounted()) {
        this.setState({data: data});
        clearInterval(intervalHandle);
      }
      }.bind(this),
      error: function(xhr, status, err) {
      //console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    intervalHandle = setInterval(this.loadFromServer, 1);
    $('#example')
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
  },
  render: function() {
    //var row = this.state.data
    //console.log(row);
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
                               <h3>Venues Jiggie</h3>
                             </Col>
                             <Col xs={6}>
                               <p className='text-right' style={{paddingTop: '10px'}}><Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold', cursor: 'pointer'}} glyph='icon-nargela-plus' onClick={this.newMember}></Icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold'}} glyph='icon-nargela-download'></Icon></p>
                             </Col>
                           </Row>
                         </Grid>
                       </PanelHeader>
                        <PanelBody style={{paddingBottom: 30}}>
                          <Grid>
                            <Row>
                                <Col xs={12}>


                                <VenuesList id='example' data={this.state.data}/>


                                </Col>
                            </Row>
                          </Grid>
                        </PanelBody>
                   </Panel>
              </PanelContainer>
            </Col>

          </Row>
        </Grid>

      </Container>
    );
  }
});
var VenuesList = React.createClass({
  render: function() {
    console.log(this.props.data.venues);
    return (
      <Table id='example' className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
          </tr>
        </thead>

      <tbody>
         {
             this.props.data.venues.map(function(venue) {
               return <tr key={venue._id}>
                 <td><img src={venue.photos} width='70' />&nbsp;&nbsp;{venue.name}</td>
                 <td style={{wordWrap: 'break-word', width: '200px'}}>{venue.address}<br></br>{venue.neighborhood}</td>
                 <td>{venue.city}</td>
               </tr>
             })
         }
     </tbody >
</Table>
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
