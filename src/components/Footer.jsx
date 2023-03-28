import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Este projeto foi criado por <b>Pedro Henrique Salazar</b> com ReactJS
        com o objetivo de aprimorar conhecimentos dessa tecnologia.{' '}
        <a href="/about">Saiba mais</a> sobre esse projeto.
      </p>

      <div>
        <div>
          <h4>PEDRO SALAZAR</h4>
          <p>29 anos</p>
          <p>Rio de Janeiro - BR</p>
          <p>Cursando Ciência da Computação</p>
        </div>

        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h4>LINKS</h4>
          <ul className="menu">
            <li>
              <Link to="/moviesflix/" className="active" data-prop="home">
                Início
              </Link>
            </li>
            <li>
              <Link to="/series" data-prop="series">
                Séries
              </Link>
            </li>
            <li>
              <Link to="/movies" data-prop="movies">
                Filmes
              </Link>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h4>ME ENCONTRE</h4>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              paddingTop: '10px',
            }}
          >
            <a href="mailto:ph.s.salazar">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/5JREFUaEPtWFtoHFUY/v4z090QRUsjxvpgK6IgWBGsEkQrQkFEH3yoIEVI4yUP7uzsGmqCSuxIRDHSmJnZNRI11IdaFYR6eSm2FISipfRFafFJiQ+1RXZLLVjC7JxPJmzqtqZ7ycymTd19WdjzX77LOf+eGcEK/8gKx48OgcvtYMeBjgMxFehsoZgCxk7vOBBbwpgFrk4HLMs6LqLujClO0ulnAN7u+/6ftYUXdcCycs8B2hWRa5JGscR6ISATvu+OAGBdArZtP6017k6lzKkgCLeT+kURMZfYOIm0/YahRrTWj5L83ff93Y0IOCR2kPpX0hgwTZzSWo8BsgVYzssfj4jICMlTAHYBcp8I3vA8z2mKQBREUgPyUVdXaigIgrvCMBwXUZuSkLVOjVlAXj958sTu3t61FoB3RJCO4lsmUNPkF4ADvu//mM1mN0f7EcCGhImUAL4LYFIptT4MuUsEfReo3aoDtcmRGyKqAOjhnp6esFwuP6s1HRFZG5PI34D4c3Pn3p6env7Ltu0XtObEYgMkjgPnMZI4bhiyzXXdI4ODg93pdDoLyCsArm+FCMkKIDOmqZzJyck/8vn8+iDQM0rhkUvVSYRA9WxURNROQO/wfX8uk8n0KGW+TDK/sF8bkNlP6qFCofBztLUj1UnsBHBtvbzECPzbhMdEpN/zvKPRb5lMZp1SxhiAZxabWKQ+TBrDxaL7fRRv2/YtJD4GsLkZ99pAYL5tALDf9/09CyCy2ez9AF4j8aCIpEgcVQrveZ73VU1MHyn7RHBdM+DjTqE6PXisUqk8NDU1ddpxHNNxnEo9QAsx0XepdPprgI9dTgIntA4fKBaLs/l8/p4w1HtJ7Ovu7to+Pj5+thaY4ziqXC4/rzXeBCRfKLifRkMgleo6cPG4bPshrjY4o5Rscl33p2w2uwWQTwB0V9dmSRlbtUodnJuTwDQrG0l5FeDG6jpFMOp53lu5XO7GMOQhEdzWyIkkz0CgtTxeLLrfWZadA+bntmoE4L/r/Nw0zYFKpXIziUMi0rscU4iAbFuzZvVnpVJpWkT1tw78gr/IH4IgeDKdTq8LQ32w3g04IQc4rLWeETG+FMHD8cCfz/4N4BMAbiWx91K339gERPABgAkS3wK4IyHw82W05llAbTUM3kTiw8VqxyKgNb4xDLyvNfeIyOokwdfUCgEOicgNJEYv7rFkAiSix7gJgGPL9HBT1Bp9SuHeWhJLJtAmtVsu+/8gYFm5p0T4RcvyLEsCt9beuebvR4v1tSx7tHqY2nVYW6JL8pxSMu153ksN30q0VPkKCL4638xdAcI2DaHjQNNStSmw40CbhG26bMeBpqVqU2DHgTYJ23TZFe/AP3CI+EDfHvoMAAAAAElFTkSuQmCC"
                title="Enviar Email"
                height="24px"
              />
            </a>

            <a href="mailto:ph.s.salazar">
              <img
                src="data:image/png;base64,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"
                title="Ir para o GitHub"
                width="24px"
              />
            </a>

            <a href="mailto:ph.s.salazar">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA3FJREFUaEPtmk1IFGEYx//PuKIYmqmUKEUSHaJL1KWOHUKiOkR0CCOEyDRn3lnRouNEh1Kj/XhXDRE6FBEIHYKC6NAp6hB1KAjEPPSBbGxWFNSuO/PEKps6O9vmtK5j7h7fefZ9/795/u/3EFb4j1a4fvy/AB0dHeu8kp3KyspkX1/fNyc9CzLQ1tZWUVZW3sfMLURU7RWAlA5mvCeiXilDkfm6FgAIIYaY0e4l4XYtRDgWDodvp8vnA5Cmic8A1noZAKB7UoYOZgD09PSsiccT370tfsZMz6WUu4oAy5epVZoBBngEwFA8Hp+oqKhoMk1uB7gNKPRk6CoD1C9l6JzdNpqmXQGou7B2cgFQUqI0BIPBSbvQrq6uxmTSfO91ALO2tqbcMIykXahhGL5Y7NMPIvIVDsJFBgDeI6V86mCh3QA9KZx41/MAPfP5lOZAIDCVFtvd3V2XSCQeALRzBQCkJNJHgEeJMAFgKzOOAqgtrHjXGSi8zOwtuuoD+QbgGDONE5HJzPVE2PL3LbgAIMJZAI/sjTDzfoAupsuZlcOKYr1ziBMAnQDosWXhwsBA6OH8GFVVGwDlJIAeIlT9GcYFAMBHpJR37BWrqn6ciG+ky02zZOvgYGDcHieE6LUsVEejk2dGR0fNbAL9fv+26WnzvqLQ5jxb6N8AVFVvrqtb99AwDCuXVfx+/45k0npKhDLn2GXIQC7RDhkLMkP3HEBra2t5VVXVdsuyKBqNvshmJyFEapge8xSAEGIvM24CaJgZzdl6XVpaui8QCHxwEqpp2luANmY+WwYL6bq+wTR5zGGEGZEyfMoJoLNT3FUUHPIEgKoKnQhBB6FfpQw7Ht9omn4d4FZPAAghLjHjvNObjsd/Vg8PD3+1P9M0PQSw8ApALzMyNkQpcabp2zQ4eDVj8hNCZBmJlqEPpCayIsBvLxUzMNetFrMWKlqoaKF/XE4XLbSqLcSMN8z4Yp/WFQU1AJrmtpT8ipniDnGNAOqz7AteWhYSmf9JrUR5fZ6WEovdkixlvKuJbCkFLbbu/xXAMAwlFpv6nPtYY7FvLL/xzNb9SCRyIF3rgmtWTdOvAXw6v03mtzZmaolEQrccAWZvKqf7Zy+6cx0w5VdYrtqYeZIIl6WU4fmxjt9KpOwUjUY9c19smqbltGtLgaz4jz1+AQU5pl5GBeejAAAAAElFTkSuQmCC"
                title="Ir para o meu perfil do LinkdIn"
                width="24px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
