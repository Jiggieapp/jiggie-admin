import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  addNew: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/admin-user/new');
  },
  getInitialState: function(){
     return {data: []};
  },
  loadFromServer: function() {
    $.ajax({
      //http://jiggie.herokuapp.com/admin/admin/users/list?admin_token=dsabalsdbaiyzVYVKJD78t87tgBQGK9sfhkslhfdksCFCJjgvgKV98y98h90z3pd&per_page=100
      //url: serviceUrl + UrlTable +'/List?admin_token=' + Token + '&per_page=' + Pages,
      url: 'http://localhost:9000/api/admins',
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
    //intervalHandle = setInterval(this.loadFromServer, 1);
    $('#examplex')
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        columnDefs: [
          { targets: [-1, -3], className: 'dt-body-right' }
        ]
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
                               <h3>Admin Members</h3>
                             </Col>
                             <Col xs={6}>
                               <p className='text-right' style={{paddingTop: '10px'}}><Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold', cursor: 'pointer'}} glyph='icon-nargela-plus' onClick={this.addNew}></Icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold'}} glyph='icon-nargela-download'></Icon></p>
                             </Col>
                           </Row>
                         </Grid>
                       </PanelHeader>
                        <PanelBody>
                          <Grid>
                            <Row>
                                <Col xs={12}>
                                  <Well className='bg-white'>
                                    <Table collapsed>
                                      <thead>
                                        <tr>

                                          <th>First Name</th>
                                          <th>Email / Username</th>
                                          <th>Roles</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                        <AdminList data={this.state.data}/>
                                    </Table>
                                  </Well>

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

var AdminList = React.createClass({

  render: function() {
    //console.log(this.props.data);
    return (

      <tbody>
         {
             this.props.data.map(function(admin) {

               var uID = admin._id;
        
               var edits = 'admin-user/edit/' + uID ;
               var deletes = 'admin-user/remove/' + uID ;
               //var url_details = ''

               return <tr key={admin._id}>
                 <td><img src='/imgs/avatars/avatar2.png' width='40' height='40' style={{borderRadius:'100%', cursor: 'pointer'}} />&nbsp;&nbsp;{admin.first_name}&nbsp;{admin.last_name}</td>
                 <td>{admin.email}</td>
                 <td>
                   {admin.roles}
                 </td>
                 <td><a href={edits} style={{textDecoration: 'none', color: 'inherit'}}><Button sm bsStyle='green'><Icon glyph='icon-fontello-pencil' /></Button></a>&nbsp;&nbsp;&nbsp;<a href={deletes} style={{textDecoration: 'none', color: 'inherit'}}><Button sm bsStyle='red'><Icon glyph='icon-fontello-trash-1'/></Button></a></td>
               </tr>
             })
         }
     </tbody>

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
