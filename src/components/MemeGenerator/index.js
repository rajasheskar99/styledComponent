import {Component} from 'react'
import {
  Container,
  Heading,
  Label,
  Input,
  Button,
  Select,
  Top,
  Form,
  ImgContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {imageUrl: '', topText: '', bottomText: '', size: '', generate: false}

  getUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  getTopText = event => {
    this.setState({topText: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  getSize = event => {
    this.setState({size: event.target.value})
  }

  getGenerated = event => {
    event.preventDefault()
    this.setState({generate: true})
  }

  render() {
    const {imageUrl, topText, bottomText, size, generate} = this.state
    console.log(size)

    return (
      <Container>
        <Form onSubmit={this.getGenerated}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="image">Image Url</Label>
          <Input
            type="text"
            id="image"
            placeholder="Enter the Image URL"
            onChange={this.getUrl}
          />

          <Label htmlFor="text">Top Text</Label>
          <Input
            type="text"
            id="text"
            placeholder="Enter the Top Text"
            onChange={this.getTopText}
          />

          <Label htmlFor="bottom">Bottom Text</Label>
          <Input
            type="text"
            id="bottom"
            placeholder="Enter the Bottom Text"
            onChange={this.getBottomText}
          />

          <Label htmlFor="select">Font Size</Label>
          <Select id="select" onChange={this.getSize}>
            {fontSizesOptionsList.map(each => (
              <option value={each.optionId} key={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </Select>
          <Button type="submit">Generate</Button>
        </Form>

        {generate && (
          <ImgContainer url={imageUrl} data-testid="meme">
            <Top textSize={size}>{topText}</Top>
            <Top textSize={size}>{bottomText}</Top>
          </ImgContainer>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
