function Earth_video() {
    return (
        <div>
            {/* Background Video for PC */}
            <video autoPlay muted loop className="hidden md:block fixed top-0 left-0 w-full h-full object-cover -z-10">
                <source src="video/PC_earth.mp4" type="video/mp4" />
            </video>
            {/* Background Video for Mobile */}
            <video autoPlay muted loop className="block md:hidden fixed top-0 left-0 w-full h-full object-cover -z-10">
                <source src="video/Mobile_earth.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Earth_video