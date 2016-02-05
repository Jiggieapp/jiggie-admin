import { Link, State, Navigation } from 'react-router';
import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  new: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/events/new');
  },
  getInitialState: function(){
     return {data: []};
  },
  loadFromServer: function() {
    $.ajax({
      //http://jiggie.herokuapp.com/admin/admin/users/list?admin_token=dsabalsdbaiyzVYVKJD78t87tgBQGK9sfhkslhfdksCFCJjgvgKV98y98h90z3pd&per_page=100
      //url: serviceUrl + UrlTable +'/List?admin_token=' + Token + '&per_page=' + Pages,
      url: 'http://localhost:9000/api/events',
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
    //console.log(row);


    var events = this.state.data;
    console.log(events);
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{marginBottom: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={8}>
                          <h3>Events</h3>
                        </Col>
                        <Col xs={3}>
                          <p className='text-right' style={{paddingTop: '10px'}}><Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold', cursor: 'pointer'}} glyph='icon-nargela-plus' onClick={this.new}></Icon></p>
                        </Col>
                        <Col xs={1}><ExportEvents data={this.state.data} style={{cursor: 'pointer'}}/></Col>

                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 25}}>
                    <Calendar events={events}/>
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
var Calendar = React.createClass({
 componentDidMount: function() {
   //const { calendar } = this.refs;
   $('#calendar').fullCalendar({
     header: {
       left: 'prev,next today',
       center: 'title',
       right: 'month,agendaWeek,agendaDay'
     },

     events: 'http://localhost:9000/api/events',
                    eventDataTransform: function (rawEventData) {
                        return {
                            id: rawEventData._id,
                            title: rawEventData.title,
                            start: rawEventData.start_datetime_str,
                            end: rawEventData.end_datetime_str,
                            url: "/app/events/edit/"+rawEventData._id
                        };
                    }
   });
 },
  render: function(){

    return(
      <div id="calendar"></div>
    )
  }

});

/////event export
var ExportEvents = React.createClass({
  componentDidMount: function(){
    $('.export').click(function(){
        var data = $('#txt').val();
        if(data == '')
            return;

        JSONToCSVConvertor(data, "Events Jiggie Report", true);
    });
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = '';
    //Set Report title in first row or line

    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  },

   render: function(){
    //var row = this.state.data;
    var row = JSON.stringify(this.props.data);

     return(
       <div className="text-left"style={{marginTop: '10px', cursor: 'pointer'}}>

       <Icon className='fg-white export' glyph='icon-nargela-download' style={{fontSize:'28px', fontWeight:'bold', cursor: 'pointer'}}></Icon>
      <Textarea id='txt' rows='3' value={row} style={{display: 'none'}}/>
       </div>
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
