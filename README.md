# API REST Countries com React, styled-components e React Router | Desafio do Frontend Mentor

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/230400522-8f1185c4-de30-4748-9640-fad5789cd9f2.gif"
	alt="Visualização da página inicial do projeto" />
</div>

## 🔎 Visão geral

Este projeto traz informações de países da API [REST Countries](https://restcountries.com/). O principal foco era fazer as requisições dos **endpoints** oferecidos com a [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) do JavaScript.

Através do uso de **funções assíncronas** em conjunto com os fundamentos do React foi possível aplicar uma sintaxe limpa para lidar com a resposta da API e retornar feedbacks para o usuário de acordo com cada momento / resposta da API.

**OBS:** O projeto se encontra em inglês por conta das informações da API estarem em inglês.

### 🔗 Acesse o projeto

* [Site ao vivo](https://leo-rest-countries-api.vercel.app/)
* [Desafio no Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

### 💻 Principais tecnologias / recursos

* [React](https://react.dev/)
* [React Router](https://reactrouter.com/en/main)
* [styled-components](https://styled-components.com/)
* [Context API](https://react.dev/learn/passing-data-deeply-with-context)
* [Vite](https://vitejs.dev/)
* [leo-react-app](https://github.com/Leo-Henrique/leo-react-app)

## 💡 Aprendizados e principais recursos

### Fetch e funções assíncronas

Como todas as informações do projeto vem da API REST Countries e era necessário fazer mais de uma requisição, um custom hook no React se tornou obrigatório para usar a Fetch API de forma robusta para sempre lidar com os erros que podem ser retornados e sempre dar um feedback visual para o usuário.

```js
export default function useFetch() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const request = React.useCallback(async (URL, options = null) => {
        let response;
        let data;

        try {
            setLoading(true);
            
            response = await fetch(URL, options);
            data = await response.json();

            if (response.ok)
                setData(data);
            else
                throw new Error(data.message);
        } catch (error) {
            setError(error.message);
            setData(null);
        } finally {
            setLoading(false);
            return { response, data };
        }
    }, []);

    return { data, loading, error, request };
}
```
Os estados são usados para aplicar um HTML / JSX diferente de acordo com o andamento ou resposta da requisição. No final da requisição, uma promise sempre é retornada com a resposta e o JSON já convertido em objeto para oferecer mais possibilidades.

#### Skeleton

Quando a requisição está em andamento, é exibido um Skeleton:

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/230400522-8f1185c4-de30-4748-9640-fad5789cd9f2.gif"
	alt="Demonstração do Skeleton" />
</div>

#### Erros

Se um erro retorna, então o erro em questão é exibido para o usuário:

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/230409820-3dad41a4-11f3-49ae-91cd-aabe28a8914a.gif"
	alt="Demonstração do erro" />
</div>

### Scroll infinito

A API infelizmente não oferece endpoints com a possibilidade de filtrar uma quantidade específica de países para não ser necessário fazer uma grande requisição de uma vez só.

No entanto, mesmo após a requisição de todos os países, ainda são muitos elementos HTML a serem exibidos, e cada um deles possui uma imagem representando a bandeira do país, o que pode causar lentidão para o usuário.

Sendo assim, eu filtrei uma quantidade de elementos a serem exibidos por vez, e só no final do scroll desses elementos serem exibidos mais uma quantidade com **Intersection Observer**:

```jsx
const parent = React.useRef();
const [group, setGroup] = React.useState(1);
const items = 20;

React.useEffect(() => {
    if (countries) {
        const target = parent.current.lastChild;
        const observer = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                setGroup(group + 1)
                observer.unobserve(target);
            };
        }, { threshold: 1 });

        if (items * group < countries.length) observer.observe(target);
    }
}, [countries, group]);

if (countries) {
    return (
        <Wrapper ref={parent}>
            {countries.map(({ flags, name, population, region, capital }, index) => {
                if (index < (items * group)) 
                    return // cada país
            })}
        </Wrapper>
    )
}
```

Como a requisição já está feita, os elementos são exibidos sem travar o scroll e quase imperceptível ao usuário:

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/230419716-0ee47724-3e99-41b4-ab94-9dcac2d5a914.gif"
	alt="Demonstração do scroll infinito" />
</div>
