import { describe, it, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Page, { metadata } from '../app/[locale]/(public)/services/page'


describe('Page metadata', () => {
  test('metadata should be correct', () => {
    expect(metadata.title).toBe('Services')
    expect(metadata.description).toBe('Services')
    expect(metadata.keywords).toBe('Services')
  })
})

describe('Page component', () => {
  test('render test "Services"', async () => {    
    const Component = await Page()
    render(Component)

    expect(screen.getByText('Services')).toBeInTheDocument()
  })
})