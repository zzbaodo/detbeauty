import React, { useState } from "react"
import {
  Form,
  Button,
  Alert,
} from "react-bootstrap"
import MultiStepHeader from "../components/MultiStepHeader"
const ConsentFormScreen = ({history}) => {
  const [question1, setquestion1] = useState("")
  const [question2, setquestion2] = useState("")
  const [question3, setquestion3] = useState("")
  const [question4, setquestion4] = useState("")
  const [question5, setquestion5] = useState("")
  const [question6, setquestion6] = useState("")
  const [question7, setquestion7] = useState(false)
  const [question8, setquestion8] = useState(false)
  const [question9, setquestion9] = useState(false)
  const [question10, setquestion10] = useState(false)
  const [question11, setquestion11] = useState(false)
  const [question12, setquestion12] = useState(false)
  const [question13, setquestion13] = useState(false)
  const [question14, setquestion14] = useState(false)
  const [question15, setquestion15] = useState(false)
  const [question16, setquestion16] = useState(false)
  const [question17, setquestion17] = useState(false)
  const [alert, setAlert] = useState()
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (
      question1 === "" ||
      question2 === "" ||
      question3 === "" ||
      question4 === "" ||
      question5 === "" ||
      question6 === "" ||
      !question7 ||
      !question8 ||
      !question9 ||
      !question10 ||
      !question11 ||
      !question12 ||
      !question13 ||
      !question14 ||
      !question15 ||
      !question16 ||
      !question17
    ) {
      setAlert("There is at least a question left unanswered")
      return
    }
    if (
      question1 === "no" ||
      question2 === "yes" ||
      question3 === "yes" ||
      question4 === "yes" ||
      question5 === "yes" ||
      question6 === "yes"
    ) {
      setAlert(
        "Given the answers provided, you are not a suitable canidate to receive our service at the moment. Please contact us for more information"
      )
      return
    }
    history.push("/deposit")
  }

  return (
    <>
      <MultiStepHeader secondStep thirdStep="inactive" />
      <Form>
        <div className="consentForm-container">
          <h2 style={{ textAlign: "center", padding: "10px" }}>Consent Form</h2>
          <Form.Group>
            <Form.Label>Are you 18 years old or above?</Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="question1"
              checked={question1 === "yes"}
              onChange={(e) => setquestion1(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="No"
              name="question1"
              value="no"
              checked={question1 === "no"}
              onChange={(e) => setquestion1(e.target.value)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Are you under the influence of drugs or alcohol?
            </Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="question2"
              checked={question2 === "yes"}
              onChange={(e) => setquestion2(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="No"
              name="question2"
              value="no"
              checked={question2 === "no"}
              onChange={(e) => setquestion2(e.target.value)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>Are you currently Pregnancy or Nursing?</Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="question3"
              checked={question3 === "yes"}
              onChange={(e) => setquestion3(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="No"
              name="question3"
              value="no"
              checked={question3 === "no"}
              onChange={(e) => setquestion3(e.target.value)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>Are you diabetic or epileptic?</Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="question4"
              checked={question4 === "yes"}
              onChange={(e) => setquestion4(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="No"
              name="question4"
              value="no"
              checked={question4 === "no"}
              onChange={(e) => setquestion4(e.target.value)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>Do you have a communicable disease?</Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="question5"
              checked={question5 === "yes"}
              onChange={(e) => setquestion5(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="No"
              name="question5"
              value="no"
              checked={question5 === "no"}
              onChange={(e) => setquestion5(e.target.value)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Are you under active chemotherapy or radiotherapy treatment?
            </Form.Label>
            <Form.Check
              type="radio"
              label="Yes"
              value="yes"
              name="question6"
              checked={question6 === "yes"}
              onChange={(e) => setquestion6(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="No"
              name="question6"
              value="no"
              checked={question6 === "no"}
              onChange={(e) => setquestion6(e.target.value)}
            ></Form.Check>
          </Form.Group>
          <hr />
          <h2 style={{ textAlign: "center", padding: "10px" }}>
            Acknowledgement
          </h2>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question7"
              label="I understand that this procedure is a permanent change to my skin
              and body"
              checked={question7}
              onChange={(e) => setquestion7(!question7)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question8"
              label="I allow my tattoo to be photographed and be used for DET Beauty portfolio showcased"
              checked={question8}
              onChange={(e) => setquestion8(!question8)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question9"
              label="I understand that after my service, there will be no refunds. No exceptions"
              checked={question9}
              onChange={(e) => setquestion9(!question9)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question10"
              label="I agree that the studio does not have a way of identifying if I am allergic to the elements or ingredients that will be used for my tattoo"
              checked={question10}
              onChange={(e) => setquestion10(!question10)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question11"
              label="I understand that I need to take care of the tattoo by following the after care instruction to prevent any signs and symptoms of infection that indicate a need to seek medical care given to me by DET Beauty"
              checked={question11}
              onChange={(e) => setquestion11(!question11)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question12"
              label="I understand that I might get an infection if I don't follow the instructions given to me in regards of taking good care of my tattoo"
              checked={question12}
              onChange={(e) => setquestion12(!question12)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question13"
              label="I understand that successful color saturation can NOT be guaranteed due to hidden scar tissue. I understand that the proposed procedure(s) involve the inherent risks of the such procedures and possible complications during and/or following the procedures such as : infection, poor color retention and hyper-pigmentation"
              checked={question13}
              onChange={(e) => setquestion13(!question13)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question14"
              label="I understand that variations in color and design may exist between the chosen shapes and colors selected by me and as ultimately applied to my body"
              checked={question14}
              onChange={(e) => setquestion14(!question14)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question15"
              label="I understand that tattoo inks, dyes, and pigments have not been approved by the federal Food and Drug Administration and that the health consequences of using these products are unknown"
              checked={question15}
              onChange={(e) => setquestion15(!question15)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question16"
              label="I agree to follow all instructions concerning the care of my tattoo, and that any touch-ups needed because of my own negligence will be done at my own expense"
              checked={question16}
              onChange={(e) => setquestion16(!question16)}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              value="yes"
              name="question17"
              label="I confirm that the information I provided in this document is accurate and true"
              checked={question17}
              onChange={(e) => setquestion17(!question17)}
            ></Form.Check>
          </Form.Group>
          <Button block onClick={onSubmitHandler}>
            Continue
          </Button>
          {alert && <Alert variant="danger">{alert}</Alert>}
        </div>
      </Form>
    </>
  )
}

export default ConsentFormScreen
