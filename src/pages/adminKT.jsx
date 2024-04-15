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
    top: '40%',
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
function MyVerticallyCenteredModal(props) {
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
                    Objectives::
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b>Introduce what the project is all about.</b>
                </h6>  <h6>
                    <b>Set expectations as part of GPC monitoring team.</b>
                </h6> <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link onClick={() => projectOverview('https://in.accenture.com/cioorganization/cio-methods-and-tools/cio-operations/cio-gpc/')} underline="hover">
                    {'CIO GPC | CIO Organization'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For admin Stuff
function AdminStuff(props) {
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
                <h6><b> Discuss all admin-related topics:</b></h6>
                - Offset   <br />
                - Leaves (SL/EVL/VL)   <br />
                - Trainings   <br />
                - Penalties   <br />
                - Machine compliance (PMT, disk space, & other laptop concerns)    <br />
                - Work Ethics   <br />
                - Shift Schedule   <br />
                - OneSource file   <br />
                - myTE (Reviewer/Approver, Location, Reimbursements, PPA, & Training Charging)

                <br />
                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://ts.accenture.com/:x:/r/sites/PDCSOH/Shared%20Documents/06_Admin/References/GPC%20-%20ATCP%20Book%20of%20Guidelines%20FY24.xlsx?d=w709471e18a5a4f84b899d367ead9ec20&csf=1&web=1&e=dhsmDh" underline="hover">
                    {'CIO-GPC_00_ATCP>06_Admin>References>GPC - ATCP Book of Guidelines FY24'}
                </Link>
                <Link href="https://ts.accenture.com/:p:/r/sites/PDCSOH/Shared%20Documents/06_Admin/References/Good%20Workplace%20Habits.pptx?d=w6dbc287687db44d394b53fb290564217&csf=1&web=1&e=o5Wbgd" underline="hover">
                    {'CIO-GPC_00_ATCP>06_Admin>RIRO>References>Good Workplace Habits'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For Priorities in Workday
function PrioritiesWorkday(props) {
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
                <h6><b>Workday Priorities checking (Sim/Lyss)</b></h6>


                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://wd3.myworkday.com/wday/authgwy/accenture/login.htmld?returnTo=%2faccenture%2fd%2finst%2f1%2437%2f247%241990323.htmld%23TABINDEX%3D0%26SUBTABINDEX%3D0" underline="hover">
                    {'Workday'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


// For Microsoft Teams and OneNote
function MSTeamsOneNote(props) {
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


        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Objectives:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b>Navigate MS Teams and its core features.</b></h6>
                1. MS Teams Channel <br />
                - CIO-GPC_00_ATCP<br />
                - CIO-GPC_01_Monitoring <br />
                - CIO-GSM/GPC Team <br />
                - Application Teams Channels <br />
                2. Daily Chatbox <br />
                3. GSMAlwaysOnTechBridge on MS Teams <br />
                4 GPC GSM chat window <br />
                5. Handover Chatbox<br />
                - ATCA to ATCP <br />
                - ATCP to ATCI <br />
                6. ATCP-ATCI Monitoring Items chat groups <br />
                7. Tower Chat Group <br />
                8. Application Team Chat Groups <br />
                - CORE DIRECTORY SCOM MONITORING <br />
                - ABACUS-GPC monitoring channel <br />
                9. GPCOfficerOftheWatch bot <br />
                10. Calendar <br />
                - Accept and decline Meeting Invites <br />
                - Create new meetings <br />
                11. Upload files <br />  <br />

                <h6><b>Navigate OneNote and its core features. · Notebooks</b></h6>
                1. ATCP <br />
                - GPC ATCP WB <br />
                - References <br />
                2. Weekly Team Status Meeting Agenda <br />
                3. Subteams pages Overview <br />
                4. CIO-GPC Monitoring Notebook <br />
                - Handover Items <br />

                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://ts.accenture.com/:f:/r/sites/PDCSOH/Shared%20Documents/General?csf=1&web=1&e=RXD7kx" underline="hover">
                    {'CIO-GPC_00_ATCP>Documents>General'}
                </Link><br />
                <Link href="https://ts.accenture.com/:o:/r/sites/CIOSohMonitoring/Shared%20Documents/General/CIO-GPC%20Monitoring%20Notebook?d=w4446e814bc5e4ee9b09cc74d455e59cd&csf=1&web=1&e=W7iA3p" underline="hover">
                    {'CIO-GPC_01_Monitoring>Documents>General>CIO-GPC Monitoring Notebook'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For Consolidated SOP
function ConsolidatedSOP(props) {
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



                <h6><b>Discuss the importance of the consolidated SOP file.</b></h6>
                <h6><b>Introduce the part of the SOPs, Server Lists, Control-M Job Lists tabs, and how to follow SOP when checking alerts.</b></h6>
                <h6><b>SOP roll-out emails.</b></h6>
                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://ts.accenture.com/sites/CIOSOH/Service%20Operation/Forms/AllItems.aspx?RootFolder=%2Fsites%2FCIOSOH%2FService%20Operation%2FApplications&FolderCTID=0x01200059B9D11E4C2CFE4F8D1B193679F06797&View=%7B69014673-2B75-4DEE-B0BB-CB5BF83CF07E%7D#InplviewHash69014673-2b75-4dee-b0bb-cb5bf83cf07e=Paged%3DTRUE-p_SortBehavior%3D1-p_FileLeafRef%3DWindows%2520Sharepoint%2520Services-p_ID%3D1907-PageFirstRow%3D61-" underline="hover">
                    {'New_Consolidate_SOP'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For dgital site
function DigitalSite(props) {
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
                <h6><b>Navigate the major parts of the Digital Site.</b></h6>
                - Monitoring Tracker <br />
                - SOP <br />
                - Notifications <br />
                - Issue Tracker <br />
                - Service Review <br />

                <br />

                <h6><b>Discuss how to log and update an item in the:</b></h6>
                - Monitoring Tracker   <br />
                - Service Review   <br />


                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://ts.accenture.com/:f:/r/sites/CIOSohMonitoring/Shared%20Documents/General/Digital_Site_Process_Documents?csf=1&web=1&e=NYFbPf" underline="hover">
                    {'CIO-GPC_01_Monitoring>Documents>General>Digital_Site_Process_Documents'}
                </Link><br />
                <Link href="https://gpcdigital.accenture.com/#/search-sop" underline="hover">
                    {'Digital Site'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For air site
function AirSite(props) {
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
                <h6><b>Navigate AIR and discuss the important sections/fields as part of the monitoring task.</b></h6>
                - Primary Contacts   <br />
                - Emergency Contacts   <br />
                - Support Contacts   <br />
                - Application Information (Service tier, ServiceNow Assignment Group, and URL)   <br />
                - Support Details (Special Contact Instructions, GPC Managed Application, Impact Playbook URL )   <br />




                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://support.accenture.com/air" underline="hover">
                    {'Link'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For GPC SharePoint Site and Onboarding Site
function GPCSharepointOnbaordingSite(props) {
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
                <h6><b>GPC SharePoint Site and Onboarding Site</b></h6>


                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://support.accenture.com/air" underline="hover">
                    {'CIO - GPC Sharepoint'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// For Incident Management
function IncidentManagement(props) {
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
                <h6><b>Discuss the high-level incident management process.</b></h6>
                <h6><b>Introduce slangs/terms/processes.</b></h6>

                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://in.accenture.com/cioorganization/cio-methods-and-tools/cio-operations/cio-operations-support-processes/3-1-2-incidents/" underline="hover">
                    {'3.1.2 Incidents | CIO Organization'}
                </Link>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


// For Email Management
function EmailManagement(props) {
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
                <h6><b>Navigate Outlook and its important functionalities/features.</b></h6>
                - Set up rules in Outlook. <br />
                - Introduce OWA when Outlook has issues. <br />
                - Set up email templates for prevention analysis items. <br />
                - Set up signature. <br />
                - Add GPC.MonitoringBackup mailbox. <br />
                - Best practices in managing emails. <br />

                <h6><b>Calendar</b></h6>
                - Create/update Meeting Invites <br />
                - Accept/Delete Meeting Invites or Reminders <br />

                <h6><b>Utilize Online Archive to free up space in Outlook.</b></h6>
                <br />
                <Modal.Title id="contained-modal-title-vcenter">
                    Referrences:
                </Modal.Title>
                <Link href="https://ts.accenture.com/:w:/r/sites/PDCSOH/Shared%20Documents/06_Admin/References/GPC_ATCP_Best_Practices_v5.docx?d=wadbb0ae2cfb44c5e9f59ca9ca841512c&csf=1&web=1&e=o7sa9J" underline="hover">
                    {'CIO-GPC_00_ATCP>Documents>06_Admin>References>GPC_ATCP_Best_Practices_v5'}
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

export default function AdminKT() {
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

                <Typography id="modal-modal-title" variant="h6" component="h4" >
                    1. Talk with lead
                </Typography>

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow(true)}>
                    2. Project Overview
                </Typography>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow2(true)}>
                    3. Admin Stuff
                </Typography><AdminStuff
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow3(true)}>
                    4. Priorities in Workday
                </Typography><PrioritiesWorkday
                    show={modalShow3}
                    onHide={() => setModalShow3(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow4(true)}>
                    5. Microsoft Teams and OneNote
                </Typography>
                <MSTeamsOneNote
                    show={modalShow4}
                    onHide={() => setModalShow4(false)}
                />


                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow5(true)}>
                    6. Consolidated SOP file
                </Typography><ConsolidatedSOP
                    show={modalShow5}
                    onHide={() => setModalShow5(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow6(true)}>
                    7. Digital Site
                </Typography> <DigitalSite
                    show={modalShow6}
                    onHide={() => setModalShow6(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow7(true)}>
                    8. AIR Site
                </Typography> <AirSite
                    show={modalShow7}
                    onHide={() => setModalShow7(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow8(true)}>
                    9. GPC SharePoint Site and Onboarding Site
                </Typography> <GPCSharepointOnbaordingSite
                    show={modalShow8}
                    onHide={() => setModalShow8(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow9(true)}>
                    10. Incident Management
                </Typography><IncidentManagement
                    show={modalShow9}
                    onHide={() => setModalShow9(false)}
                />

                <Typography id="modal-modal-title" variant="h6" component="h4" onClick={() => setModalShow10(true)}>
                    11. Email Management
                </Typography> <EmailManagement
                    show={modalShow10}
                    onHide={() => setModalShow10(false)}
                />
             
            </Box>

        </Row>
    );
}