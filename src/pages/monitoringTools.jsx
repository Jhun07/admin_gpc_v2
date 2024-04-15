import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from '@mui/material/Link';
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const handleClick = () => {
    window.open('https://ts.accenture.com/sites/PDCSOH/Lists/CIO%20GPC%20ADMIN%20ATCP_OffsetLeaves%20TRACKER/AllItems.aspx');
};

const style = {
    position: 'absolute',
    top: '29%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',

    boxShadow: 24,

    p: 4,
};

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));



// SCOM Monitoring
function SCOM(props) {
    const projectOverview = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const bg = {
        overlay: {
            background: "blue"
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // styles={{ overlay: { background: "#FFFF00" } }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Introduce how the tool work.</b></h6>
                <h6><b> Discuss the high-level definition of the alerts from this specific source.</b></h6>
                <h6><b> Standard Alert Monitoring (In case Splunk ITSI/ Datadog is unavailable or having some issues.)</b></h6>

                <br />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// Control M
function ControlM(props) {
    const projectOverview = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const bg = {
        overlay: {
            background: "blue"
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // styles={{ overlay: { background: "#FFFF00" } }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Introduce how the tool work.</b></h6>
                <h6><b> Discuss the high-level definition of the alerts from this specific source.</b></h6>
                <h6><b> Discuss how to check the status of jobs.</b></h6>

                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link onClick={() => projectOverview('https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/04_Splunk/Splunk%20Core%20Process%20Docs?csf=1&web=1&e=1gPgol')} underline="hover">
                    {'CIO-GPC_01_Monitoring>Documents>04_SplunkSplunk Core Process Docs'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


// VMWare
function VMWare(props) {
    const projectOverview = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const bg = {
        overlay: {
            background: "blue"
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // styles={{ overlay: { background: "#FFFF00" } }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Introduce how the tool work.</b></h6>
                <h6><b> Discuss the high-level definition of the alerts from this specific source.</b></h6>
                <h6><b> Discuss how to check the status of hosts.</b></h6>

                <br />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// CMDB
function CMDB(props) {
    const projectOverview = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const bg = {
        overlay: {
            background: "blue"
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // styles={{ overlay: { background: "#FFFF00" } }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Introduce how the tool works.</b></h6>

                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://support.accenture.com/nav_to.do?uri=%2Fcmdb_ci_server_list.do" underline="hover">
                    {'Servers | ServiceNow'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


// ServiceNow
function ServiceNow(props) {
    const projectOverview = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const bg = {
        overlay: {
            background: "blue"
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // styles={{ overlay: { background: "#FFFF00" } }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b>  Discuss how to create an incident ticket in Snow.</b></h6> <br />
                <h6><b>  Discuss how to check updates or update the ticket.</b></h6>
                1. Work Notes <br />
                2. Change/update the following field: <br />
                - Status of the ticket <br />
                - Assignment Group <br />
                - Owner Group <br />
                - Impact/Urgency/Priority <br />
                - Time zone <br /><br />
                <h6><b>Short description/Description of the application</b></h6>


                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://support.accenture.com/nav_to.do?uri=%2Fhome.do" underline="hover">
                    {'SNOW'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



// DataDog SNow Incident Ticket dashboard
function DatadogSNowIncident(props) {
    const projectOverview = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    const bg = {
        overlay: {
            background: "blue"
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // styles={{ overlay: { background: "#FFFF00" } }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b>  Introduce how the tool works.</b></h6> 

                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://accenture.splunkcloud.com/en-US/app/app_cio_5317_global_prevention_center/datadog_alert_report__testing_anurag?form.time.earliest=-60m%40m&form.time.latest=now&form.airid=*&form.AirId=*&hideFilters=false&form.field1=*" underline="hover">
                    {'Datadog Snow_Tickets_ Infra_Synthetic | Splunk 9.0.2209.3'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function MonitoringTools() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);
    const [modalShow7, setModalShow7] = React.useState(false);
    const [modalShow8, setModalShow8] = React.useState(false);
    const [modalShow9, setModalShow9] = React.useState(false);
    const [modalShow10, setModalShow10] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);
    const handleOpen6 = () => setOpen6(true);
    const handleClose6 = () => setOpen6(false);
    const handleOpen7 = () => setOpen7(true);
    const handleClose7 = () => setOpen7(false);
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    return (
        <Row xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">


            <Box sx={style}>

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow(true)}>
                    1. SCOM/Accenture Support
                </Typography> <SCOM
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />


                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow2(true)}>
                    2. Control-M
                </Typography> <ControlM
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />


                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow3(true)}>
                    3. VMWare
                </Typography><VMWare
                    show={modalShow3}
                    onHide={() => setModalShow3(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow4(true)}>
                    4. CMDB
                </Typography>
                <CMDB
                    show={modalShow4}
                    onHide={() => setModalShow4(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow5(true)}>
                    5. ServiceNow
                </Typography><ServiceNow
                    show={modalShow5}
                    onHide={() => setModalShow5(false)}
                />
               
                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow6(true)}>
                    6. DataDog SNow Incident Ticket dashboard
                </Typography><DatadogSNowIncident
                    show={modalShow6}
                    onHide={() => setModalShow6(false)}
                />
             

            </Box>

        </Row>
    );
}