import * as React from 'react';
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';

const handleClick = () => {
  window.open('https://ts.accenture.com/sites/PDCSOH/Lists/CIO%20GPC%20ADMIN%20ATCP_OffsetLeaves%20TRACKER/AllItems.aspx');
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Home() {
 


  // for Linking to another tab
  const projectOverview = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
    <Row xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
      <Col xs>
        <Button gutterBottom variant="text" href="/AdminKT" >
          Admin KT
        </Button>
      </Col>
      <Col xs>
            <Button gutterBottom variant="text" href="/MonitoringTools">
              Monitoring Tools Overview
            </Button>
         
      </Col>

      <Col xs>
            <Button gutterBottom variant="text" href="/">
            Splunk Monitoring
            </Button>
         
      </Col>
      <Col xs>
            <Button gutterBottom variant="text" href="/">
            Datadog Monitoring
            </Button>
         
      </Col>
      <Col xs>
            <Button gutterBottom variant="text" href="/">
            Clustering
            </Button>
         
      </Col>
      <Col xs>
            <Button gutterBottom variant="text" href="/">
            Suplementary
            </Button>
         
      </Col>
      <Col xs>
            <Button gutterBottom variant="text" href="/">
            Referrences
            </Button>
         
      </Col>
      {/* <Col xs>
        <Card style={{ width: '18rem', height: '17rem' }}>
          <CardMedia
            sx={{ height: 50, backgroundColor: '#ADD8E6' }}

          > </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" onClick={handleOpen3}>
              Splunk Monitoring
            </Typography>
          </CardContent>
          <CardActions>
            <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1. Splunk Core Overview
                </Typography>
                <Link onClick={() => projectOverview('https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/04_Splunk?csf=1&web=1&e=inEpNu')} underline="hover">
                  {'CIO-GPC_01_Monitoring>Documents>04_Splunk'}
                </Link>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  2. Deep-dive analysis for xMatters
                </Typography>

                <Link onClick={() => projectOverview('https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/04_Splunk/Splunk%20Core%20Process%20Docs?csf=1&web=1&e=1gPgol')} underline="hover">
                  {'CIO-GPC_01_Monitoring>Documents>04_SplunkSplunk Core Process Docs'}
                </Link>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  3. Deep-dive analysis for Vcenters
                </Typography>
                <Link onClick={() => projectOverview('https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/04_Splunk/Splunk%20Core%20Process%20Docs?csf=1&web=1&e=1gPgol')} underline="hover">
                  {'CIO-GPC_01_Monitoring>Documents>04_SplunkSplunk Core Process Docs'}
                </Link>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  4. Splunk Best Practices and Reminders
                </Typography>
                <Link href="https://ts.accenture.com/:w:/r/sites/PDCSOH/Shared%20Documents/06_Admin/References/GPC_ATCP_Best_Practices_v5.docx?d=wadbb0ae2cfb44c5e9f59ca9ca841512c&csf=1&web=1&e=o7sa9J" underline="hover">
                  {'CIO-GPC_00_ATCP>Documents>06_Admin>References>GPC_ATCP_Best_Practices_v5'}
                </Link>

              </Box>
            </Modal>

          </CardActions>
        </Card>
      </Col> */}
      {/* <Col xs>
        <Card style={{ width: '18rem', height: '17rem' }}>
          <CardMedia
            sx={{ height: 50, backgroundColor: '#ADD8E6' }}

          > </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" onClick={handleOpen4}>
              Datadog Monitoring
            </Typography>

          </CardContent>
          <CardActions>
            <Modal
              open={open4}
              onClose={handleClose4}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1. Datadog Overview
                </Typography>
                <Link onClick={() => projectOverview('https://ts.accenture.com/:w:/r/sites/CIOSOH/_layouts/15/Doc.aspx?sourcedoc=%7B4FFE6A77-3990-48D4-8F50-C90426CA94B2%7D&file=DataDog%20User%20Manual.docx&action=default&mobileredirect=true')} underline="hover">
                  {'CIO - GPC > Service Operation > Datadog_Monitoring'}
                </Link>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  2. Datadog SOP and User Guide Document
                </Typography>

                <Link onClick={() => projectOverview('https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/04_Splunk/Splunk%20Core%20Process%20Docs?csf=1&web=1&e=1gPgol')} underline="hover">
                  {'CIO - GPC > Service Operation > Datadog_Monitoring'}
                </Link>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  3. Datadog Synthetic Alert (Email and Dashboard)
                </Typography>

                <Typography id="modal-modal-title" variant="h6" component="h4">
                  4. Datadog Infrastructure Alert (Email and Dashboard)
                </Typography>

                <Typography id="modal-modal-title" variant="h6" component="h4">
                  5. Datadog Best Practices and Reminders
                </Typography>
                <Link href="https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/General/Digital_Site_Process_Documents?csf=1&web=1&e=NYFbPf" underline="hover">
                  {'CIO-GPC_01_Monitoring>Documents>General>Digital_Site_Process_Documents'}
                </Link>
              </Box>
            </Modal>

          </CardActions>
        </Card>
      </Col> */}
      {/* <Col xs>
        <Card style={{ width: '18rem', height: '17rem' }}>
          <CardMedia
            sx={{ height: 50, backgroundColor: '#ADD8E6' }}

          > </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Clustering
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4" onClick={handleOpen5}>
              Cluster 1
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4" onClick={handleOpen6}>
              Cluster 2
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4" onClick={handleOpen7}>
              Cluster 3
            </Typography>
          </CardContent>
          <CardActions>
            <Modal
              open={open5}
              onClose={handleClose5}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>


                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                  Report KT
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1.  SAP
                </Typography>
                <Link href="https://ts.accenture.com/sites/AccentureSAPOperations/Lists/8AM%20Highlights%20Archive/Production%20System%20Monitoring.aspx" underline="hover">
                  {'SAP Sharepoint Report'}
                </Link><br />
                <Link href="https://solmanmonitor.accenture.com/sap/bc/ui5_ui5/sap/dsh_builder_ui5/index.html?DSH_ID=ZREDLNSKC2944TB4&sap-language=EN&sap-ui-theme=sap_belize" underline="hover">
                  {'Solman - Report 1'}
                </Link>
                <br />
                <Link href="https://sapr3.accenture.com/sap/bc/gui/sap/its/webgui/!?cmd=Idoc&sap-language=en&sap-client=900#" underline="hover">
                  {'SAP 2'}
                </Link>
                <br />
                <Link href="https://sap.accenture.com/irj/portal" underline="hover">
                  {'SAP 3'}
                </Link>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  2.  IVO Health Check Report
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  3.  Rebar Server Checkout for fargate services
                </Typography>
                <br />
                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                  Alert Notifications KT
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1.  Cluster 1 applications
                </Typography>

              </Box>
            </Modal>

          </CardActions>

          <CardActions>
            <Modal
              open={open6}
              onClose={handleClose6}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>


                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                  Report KT
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1.  myTE Reports
                </Typography>

                <Typography id="modal-modal-title" variant="h6" component="h4">
                  2.  Abacus Job Status Report
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  3.  DigitalSigner Revamp
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  4.  Intune Report checking
                </Typography>
                <br />
                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                  Alert Notifications KT
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1.  Cluster 2 applications
                </Typography>

              </Box>
            </Modal>

          </CardActions>
          <CardActions>
            <Modal
              open={open7}
              onClose={handleClose7}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>


                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                  Report KT
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1.  Control-M
                </Typography>
                <Link href="https://client.wvd.microsoft.com/arm/webclient/index.html" underline="hover">
                  {'New Day Site'}
                </Link><br />
                <Link href="https://accenture.splunkcloud.com/en-US/app/search/controlm_new_day_monitoring" underline="hover">
                  {'New Day Splunk'}
                </Link>
                <br />
                <Link href="https://ts.accenture.com/:w:/r/sites/CIOSOH/_layouts/15/Doc.aspx?sourcedoc=%7B5064B893-C097-462D-96FB-8BDE67EA5DBB%7D&file=SS%20New%20Day%20Monitoring.docx&action=default&mobileredirect=true&cid=2757b846-5cef-4340-92af-11ba157385ec" underline="hover">
                  {'New Day Monitoring Documents'}
                </Link>

                <Typography id="modal-modal-title" variant="h6" component="h4">
                  2.  ServiceNow Health Dashboard
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  3.  DSM Invoice Report
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  4.  DSM Dashboard
                </Typography>
                <br />
                <Typography id="modal-modal-title" variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                  Alert Notifications KT
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  1.  Cluster 3 applications
                </Typography>

              </Box>
            </Modal>

          </CardActions>
        </Card>
      </Col> */}
      {/* <Col xs>
        <Card style={{ width: '18rem', height: '17rem' }}>
          <CardMedia
            sx={{ height: 50, backgroundColor: '#ADD8E6' }}

          > </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Supplementary
            </Typography>

          </CardContent>

        </Card>
      </Col>
      <Col xs>
        <Card style={{ width: '18rem', height: '17rem' }}>
          <CardMedia
            sx={{ height: 50, backgroundColor: '#ADD8E6' }}

          > </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Others (KT)
            </Typography>

          </CardContent>

        </Card>
      </Col> */}
      {/* <Col xs>
        <Card style={{ width: '18rem', height: '17rem' }}>
          <CardMedia
            sx={{ height: 50, backgroundColor: '#ADD8E6' }}

          > </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              References
            </Typography>

          </CardContent>

        </Card>
      </Col> */}
    </Row>
  );
}