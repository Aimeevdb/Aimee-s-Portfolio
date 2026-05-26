import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      submit(values);
    },
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      {/* Fixed: was w="1080px" which caused overflow on small screens */}
      <VStack w="100%" maxW="680px" px={[6, 10, 16]} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="white">
          Contact me
        </Heading>

        <Box p={[4, 6]} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName" color="whiteAlpha.900">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  bg="whiteAlpha.100"
                  color="white"
                  borderColor="whiteAlpha.300"
                  _hover={{ borderColor: "whiteAlpha.500" }}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email" color="whiteAlpha.900">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  bg="whiteAlpha.100"
                  color="white"
                  borderColor="whiteAlpha.300"
                  _hover={{ borderColor: "whiteAlpha.500" }}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type" color="whiteAlpha.900">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  bg="whiteAlpha.100"
                  color="white"
                  borderColor="whiteAlpha.300"
                  {...formik.getFieldProps("type")}
                >
                  <option value="hireMe" style={{ color: "black" }}>Freelance project proposal</option>
                  <option value="openSource" style={{ color: "black" }}>Open source consultancy session</option>
                  <option value="other" style={{ color: "black" }}>Other</option>
                </Select>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment" color="whiteAlpha.900">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  bg="whiteAlpha.100"
                  color="white"
                  borderColor="whiteAlpha.300"
                  _hover={{ borderColor: "whiteAlpha.500" }}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;