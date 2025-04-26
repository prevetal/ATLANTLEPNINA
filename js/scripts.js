WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// First section
	let firstSection = document.querySelector('.first_section .swiper')

	if (firstSection) {
		new Swiper('.first_section .swiper', {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			}
		})
	}


	// Quiz step1 sliders
	const quizstep1Sliders = [],
		quizstep1 = document.querySelectorAll('.quiz .step1 .swiper')

	quizstep1.forEach((el, i) => {
		el.classList.add('quizstep1_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 15,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			}
		}

		quizstep1Sliders.push(new Swiper('.quizstep1_s' + i, options))
	})


	// Products sliders
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 15,
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.product'))
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Catalog sliders
	const catalogSliders = [],
		catalog = document.querySelectorAll('.catalog .swiper')

	catalog.forEach((el, i) => {
		el.classList.add('catalog_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 15,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			}
		}

		catalogSliders.push(new Swiper('.catalog_s' + i, options))
	})


	// Projects sliders
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 15,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: el.classList.contains('big') ? 2 : 3
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Project head slider
	let projectHeadSlider = document.querySelector('.project_info .head_slider .swiper')

	if (projectHeadSlider) {
		new Swiper('.project_info .head_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Project data sliders
	const projectDataSliders = [],
		projectDataSlider = document.querySelectorAll('.project_info .data .swiper')

	projectDataSlider.forEach((el, i) => {
		el.classList.add('project_data_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		projectDataSliders.push(new Swiper('.project_data_s' + i, options))
	})


	// Services sliders
	const servicesSliders = [],
		services = document.querySelectorAll('.services .swiper')

	services.forEach((el, i) => {
		el.classList.add('services_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 15,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.service'))
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.service')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		servicesSliders.push(new Swiper('.services_s' + i, options))
	})


	// Articles sliders
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 15,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.article'))
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.article')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	if ($('.product_info .images .swiper').length) {
		new Swiper('.product_info .images .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Product to favorite
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Related articles
	initRelatedArticlesSliders()


	// Filter
	$('.filter_btn').click(function(e) {
		e.preventDefault()

		$('#filter').addClass('show')
		$('.overlay').fadeIn(200)
	})

	$('#filter .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('#filter').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	priceRange = $('#filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 2300,
		from: 180,
		to: 2140,
		step: 10,
		onChange: data => {
			$('#filter .price_range input.from').val(data.from)
			$('#filter .price_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('#filter .price_range input.from').val(data.from)
			$('#filter .price_range input.to').val(data.to)
		}
	}).data('ionRangeSlider')

	$('#filter .price_range .input').keyup(function () {
		priceRange.update({
			from: parseInt($('#filter .price_range input.from').val()),
			to: parseInt($('#filter .price_range input.to').val())
		})
	})


	heightRange = $('#filter #height_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 300,
		from: 16,
		to: 300,
		step: 1,
		onChange: data => {
			$('#filter .height_range input.from').val(data.from)
			$('#filter .height_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('#filter .height_range input.from').val(data.from)
			$('#filter .height_range input.to').val(data.to)
		}
	}).data('ionRangeSlider')

	$('#filter .height_range .input').keyup(function () {
		heightRange.update({
			from: parseInt($('#filter .height_range input.from').val()),
			to: parseInt($('#filter .height_range input.to').val())
		})
	})


	widthRange = $('#filter #width_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 300,
		from: 15,
		to: 300,
		step: 1,
		onChange: data => {
			$('#filter .width_range input.from').val(data.from)
			$('#filter .width_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('#filter .width_range input.from').val(data.from)
			$('#filter .width_range input.to').val(data.to)
		}
	}).data('ionRangeSlider')

	$('#filter .width_range .input').keyup(function () {
		widthRange.update({
			from: parseInt($('#filter .width_range input.from').val()),
			to: parseInt($('#filter .width_range input.to').val())
		})
	})


	$('#filter .reset_btn').click(function() {
		if(priceRange) {
			priceRange.reset()
		}

		if(heightRange) {
			heightRange.reset()
		}

		if(widthRange) {
			widthRange.reset()
		}
	})


	// Menu
	$('.menu_btn').click(function(e) {
		e.preventDefault()

		$('#menu').addClass('show')
		$('.overlay').fadeIn(200)
	})

	$('#menu .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('#menu').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	$('#menu .menu a.catalog_btn').click(function(e) {
		e.preventDefault()

		$('#menu .catalog_menu').addClass('show')
	})

	$('#menu .catalog_menu .back .btn').click(function(e) {
		e.preventDefault()

		$('#menu .catalog_menu').removeClass('show')
	})


	// Submit form
	$('#order_modal form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById('order_success_modal'),
			type: 'inline'
		}])
	})


	// City modal
	// setTimeout(() => {
	// 	Fancybox.show([{
	// 		src: document.getElementById('city_modal'),
	// 		type: 'inline'
	// 	}])
	// }, 1000)


	// Quiz
	var quizCurrentStep = 1,
		quizTotalSteps = 5

	$('.quiz .bottom .prev_btn, .quiz .bottom .next_btn').click(function(e) {
		e.preventDefault()

		$(this).hasClass('prev_btn')
			? quizCurrentStep = quizCurrentStep - 1
			: quizCurrentStep++

		quizCurrentStep > 1
			? $('.quiz .bottom .prev_btn').removeClass('disabled')
			: $('.quiz .bottom .prev_btn').addClass('disabled')

		quizCurrentStep === quizTotalSteps
			? $('.quiz .bottom .next_btn').addClass('disabled')
			: $('.quiz .bottom .next_btn').removeClass('disabled')

		$('.quiz .step').hide()
		$('.quiz .step' + quizCurrentStep).fadeIn(300)

		$('.quiz .bottom .progress .current').text(quizCurrentStep)
		$('.quiz .bottom .progress .line div').width(100 / quizTotalSteps * quizCurrentStep + '%')
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Related articles
		initRelatedArticlesSliders()


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Related articles
relatedArticlesSliders = []

function initRelatedArticlesSliders() {
	if (WW < 1024) {
		if ($('.related_articles .list').length) {
			$('.related_articles .list > *').addClass('swiper-slide')
			$('.related_articles .list').addClass('swiper-wrapper').removeClass('list')

			$('.related_articles .swiper').each(function (i) {
				$(this).addClass('related_articles_s' + i)

				let options = {
					loop: false,
					loopAdditionalSlides: 1,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					lazy: true,
					spaceBetween: 15,
					breakpoints: {
						0: {
							slidesPerView: 1
						},
						768: {
							slidesPerView: 2
						}
					},
					on: {
						init: swiper => {
							setHeight(swiper.el.querySelectorAll('.article'))
						},
						resize: swiper => {
							let items = swiper.el.querySelectorAll('.article')

							items.forEach(el => el.style.height = 'auto')

							setHeight(items)
						}
					}
				}

				relatedArticlesSliders.push(new Swiper('.related_articles_s' + i, options))
			})
		}
	} else {
		relatedArticlesSliders.forEach(element => element.destroy(true, true))

		relatedArticlesSliders = []

		$('.related_articles .swiper-wrapper').addClass('list').removeClass('swiper-wrapper')
		$('.related_articles .list > *').removeClass('swiper-slide')

		$('.related_articles .article').height('auto')
	}
}