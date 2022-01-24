import { Flex, Grid, Text } from '@chakra-ui/react';
import { CityCard } from './CityCard';

const cities = [
    {
        cityName: 'Londres',
        cityUrl:
            'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        country: 'Reino Unido',
        flagUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
    },
    {
        cityName: 'Paris',
        cityUrl:
            'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        country: 'França',
        flagUrl:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ1frnzgIftHTAVSFmKAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=',
    },
    {
        cityName: 'Roma',
        cityUrl:
            'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        country: 'Itália',
        flagUrl:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AkkbOKzcAjz52t43egYbNHy5owhwVAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=',
    },
    {
        cityName: 'Praga',
        cityUrl:
            'https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        country: 'República Tcheca',
        flagUrl:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEX////XFBoRRX7VAADrnqAARoDZExgAR4MAP3sAPXreEBAAMXQAM3UARn/cERMAL3PfDwzu8fXJGSXPFh8AOnm1wdFbd52qt8qgr8SIL1LDGyqQLU7MGCJOPGzFzttshKb19/pTcJlJaZTo7PFAPnGZKkidKUZVO2miJ0NcOWdziqpkfqJbdp1CZJHOk5w2QHSTLExJPW6mJkBlOGNBWINTAAAEfElEQVR4nO2YiXbTMBQF/QTCTtsQlrIUKE2hUErLUvj/f0NGISR24niR9DbNF8hz5lwpKb4WmSYz8x77COQwZpFTaWCMOc2pbGNqFhdL7HNQ4q8Tk1dlE7NicYF9Ejr8c2JmVU5lhflPXpUVG05yKivMFjmVmm0nOZUa0+Q4p9Jykt8qO5y4VbnFPhUuu5yY2Ux1KjuduFW5XWKfDI89TlRfQPuc1KuyxD4cEvudmNmp0lQ6nKhNpdOJW5UX2AdEoNuJzlQOOXFvFXWpHHSi8K3Sw4m6VPo4cam8XGIfNCH9nOhKpacTVan0duKetVpS6e9ETypDnJhKRyqDnLhnrYZUBjpRsSpDnWhYleFO5L9VRjgRn8ooJ8IvoHFOZKcy1onkVRntRHAqE5yY6kRmKlOcGHNy9xT7AyIwzYnMC2iiE7cqd0vsbwjNZCcCV2W6k/oCkrUqIZxIW5UgTlwql4JSCeTErcor7E8JRign7q0iJpVwTuSsSkAnYlYlqBMhqxLWiYxVCe3ErQr7VII7EZBKBCfsU4nhhHsqcZzwvoAiOXGpfGCbSjQnjFOJ54TvqsR0wjWVqE6YrkpkJyxTie2EYyrxnZhqwSyVBE7qVD5if+cQkjhh9gsojRNeq5LKiamOX2N/a1+SOWG0KgmdsHmrpHTCZVXSOnGrwiCVxE5YrEpyJwxWJb0T+qlgOKH+VkFxQjwVJCduVeimguXEpfKNaip4TuimguiEbCqoToimguuEZirYTiimgq3EEEwFW0hNtaCVCrYPD61UsG2sqE6+P6QCESfljzcPyEDCybw8e/IIyEDBiYvkCNvDJvhO5vbsiFAkQMAJtUgA3YmLhNKSeHCdEIwEcJ3QWxIPohOakQCiE0txSTxYTsoropEAlhOqS+JBcUI5EkBxYu1bqkviSe+EeCSQ3omLhPCSeBI7Ka+eEY8EEjshvySelE7oL4knnRNL68+0DpI5YbEknkROCP+6aZPGCZcl8aRwYksW182aBE4YLYknuhMOD9cGsZ2wiwRiO2HycG0Q1QnHSCCqE56RQEwnTCOBeE7YRgLRnJT3XCOBSE6s/ck2EojjhO+SeMI7YR4JRHDCekk8gZ3wjwRCOynv33GPBMI6EREJBHXiInmM/TlBCOZESiQQzomMJfGEcWLnYiKBQE7KczmRQBAn1n4SFAmEcOIikXHdrJnqxM6FRQKTnciLBCY6EbcknilOyvPn8iKBKU6ERgITnEiNBEY7kXjdrBnnRHAkMM6J6EhglBORb5JNBjuRHgkMd1JeS14SzzAndv5ZeiQw0Ins62bNACc6IoEhTjQsiaevE2uVRAK9nShZEk8vJ2qWxNPHiZ4l8Rx2omlJPAedaIsEDjqx8y/KIoFDThRGAt1OVEYCnU50RgIdTrRGAvudqI0E9jmxVm0ksMdJeQ1qI4GdThQviaftpLzRuySephP1kUDLSXmjekk8xXYkv9RHAttO8pJ4ihxJiyIvSYuVE2tyJGuKHEmLIkfSosiRtChyJC2K3zmSJn8At53afyeoh7kAAAAASUVORK5CYII=',
    },
    {
        cityName: 'Amsterdã',
        cityUrl:
            'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        country: 'Holanda',
        flagUrl:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///+uHCghRounAAAALIAYYzKEAAABB0lEQVR4nO3QuRGAAAzAsPDsPzN9XFJAIU3g8xxs83XAD3lSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKe1FxsAwAAAAAAAAAAAAAAAAAAAMB7N9ucbJ6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Uk9Q6/I4nGDdNoAAAAASUVORK5CYII=',
    },
];

export function Cities(): JSX.Element {
    return (
        <Flex flexDir="column" mt="20">
            <Text as="h2" fontSize="3xl" fontWeight="medium" color="gray.600">
                Cidades +100
            </Text>
            <Grid as="section" mt="10" templateColumns="repeat(4, 1fr)" gap="8">
                {cities.map(city => (
                    <CityCard
                        key={city.cityName}
                        cityName={city.cityName}
                        country={city.country}
                        flagUrl={city.flagUrl}
                        cityUrl={city.cityUrl}
                    />
                ))}
            </Grid>
        </Flex>
    );
}
