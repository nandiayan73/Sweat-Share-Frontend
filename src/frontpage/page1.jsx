const Page1=()=>{
return(<>
    	<section class="banner-area relative">
			<div class="overlay overlay-bg"></div>
			<div class="container">
				<div class="row fullscreen align-items-center justify-content-center">
					<div class="col-lg-12">
						<div class="banner-content">
							<h1 >Sweat Share </h1>
							<h2 className="animate-subheading" style={{color:"white"}}>Social Media For Gymbros</h2>
							<p class="text-white animate-subheading">Sweat Today / Shine Tomorrow</p>
                            <br></br>
                            <button class="gym-signup-button animate-subheading">Sign Up</button>
                            <div className="bubble-container">
                                {Array.from({ length: 10 }).map((_, index) => (
                                <img
                                    key={index}
                                    src="images/Home/joinbubble.png"
                                    alt="Dumbbell"
                                    className={`bubble bubble${index + 1}`}
                                />
                                ))}
                            </div>
						</div>
					</div>
				</div>
			</div>
            
		</section>

</>)
}
export default Page1;