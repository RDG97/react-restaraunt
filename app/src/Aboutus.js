const AboutUs = () => {
    const handleClick = event => {
        
        console.log('div clicked');
    }
    return(
        <div className="container-sm p-5 text-centerd-flex fw-bold text-warning fs-3" id="AboutUs">
    <p>The Ghouls Grub was founded in 1913 by Cornealious Ghoul our hours are from 9-5 (21:00 - 05:00) and you can find us at 348 E Main St, Lexington, KY</p>
    </div>
    )

}
export default AboutUs
