import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0', 
        display: 'flex',
        flexDirection: 'column',
        justifycontent: 'center',
        alignItems: 'center',
        fontFamily: 'Gotham',
        backgroundColor: "#a79e70",
        color: "white"
    },
    heading: {
        fontFamily: 'Verdana'
    },
    // mainGrid: {
    //     direction: "row",
    // },
    form: {
        marginTop: "20px",
        bottom: "-5px",
    },
    list: {
        marginTop: '15px',
    }
}))