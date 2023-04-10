import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import Tooltip from '@mui/material/Tooltip'
import MuiButton from '@mui/material/Button'
import { HiDocumentDownload } from 'react-icons/hi'

//to use mui tooltip
const Button = React.forwardRef((props, ref) => (
  <MuiButton ref={ref} {...props}>
    {props.children}
  </MuiButton>
))
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <Tooltip className="app__social-tooltip" title="Not active for now" placement="top">
        <Button>
          <BsTwitter />
        </Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip className="app__social-tooltip" title="Not active for now" placement="top">
        <Button>
          <FaFacebookF />
        </Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip className="app__social-tooltip" title="Not active for now " placement="top">
        <Button>
          <BsInstagram />
        </Button>
      </Tooltip>
    </div>
    <div>
      <Tooltip className="app__social-tooltip" title="click to download resume" placement="top">
        <Button>
          <a href="/resume.pdf" download>
            <HiDocumentDownload />
          </a>
        </Button>
      </Tooltip>
    </div>
  </div>
)

export default SocialMedia
